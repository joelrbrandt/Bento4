var Module = {
  "noInitialRun": true,
  preRun: [
    () => {
      FS.mkdir("/inputfs");
      FS.mkdir("/outputfs");
      FS.mount(NODEFS, { root: "." }, "/inputfs");
      FS.mount(MEMFS, "/outputfs");
    }
  ]
};
