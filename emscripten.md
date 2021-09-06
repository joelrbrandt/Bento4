# Run emscripten docker image

```
docker run --rm -it -v $(pwd):/src -u $(id -u):$(id -g) emscripten/emsdk bash
```

# Build

```
mkdir cmakebuild
cd cmakebuild
emcmake cmake -DCMAKE_BUILD_TYPE=Release ..
make VERBOSE=1 <target>
```
