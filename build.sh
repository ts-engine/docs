#! /bin/sh

build_dir="build"
sandbox_dir="build-sandbox"
sandbox_package_dir="$sandbox_dir/packages/ts-engine-docs"
sandbox_build_dir="$sandbox_package_dir/build"

# delete last build
rm -rf $build_dir

# make build sandbox
mkdir -p $sandbox_dir

# clone docusaurus mono repo, if it exists it doesn't fail due to /dev/null
git clone https://github.com/facebook/docusaurus $sandbox_dir

# init mono repo
cd $sandbox_dir && yarn && cd ..

# make package dir to copy into
rm -rf $sandbox_package_dir
mkdir $sandbox_package_dir

# copy docs package into docusaurus mono repo
cp package.json $sandbox_package_dir
cp docusaurus.config.js $sandbox_package_dir
cp sidebars.js $sandbox_package_dir
cp versions.json $sandbox_package_dir
cp -R docs $sandbox_package_dir/docs
cp -R src $sandbox_package_dir/src
cp -R static $sandbox_package_dir/static
cp -R versioned_docs $sandbox_package_dir/versioned_docs
cp -R versioned_sidebars $sandbox_package_dir/versioned_sidebars

# build
cd $sandbox_package_dir && yarn build && cd ../../..

# copy build output
cp -R $sandbox_build_dir $build_dir
