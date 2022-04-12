Abstraction opportunities:

- [ ] Move assets into an external location. Stackbit's Dropbox?
- [ ] Take some time to think about the structure/magic/engineering:
  - How much should a component know about its content?
  - Are there reusable patterns here?
  - What (aside from below) can be abstracted?
  - What role should the config really play? Should it manage all the content? None?
  - How to clean up and streamline the hooks?
- [ ] Right now it's basically a presentation. How do we take this video to the next level?
- [ ] Idea -> Shared components for each section to make fading easier to control and to keep elements in the same place
- [ ] `interpolate` that assumes `extrapolateRight: clamp` as the only option.
- [ ] Code frame styles. The functionality may not make sense, but maybe the classes. Maybe it's just a Tailwind component?
- [ ] Hook for simple transitions?
- [ ] Hook for scroll transitions?
- [ ] `TimelineComponent` and `TimelineComponentProps` if it seems like they are all going to be the same.
- [ ] When it comes time to build a second video, abstracting reusable layouts could be super beneficial. But this will take a bit of effort to make them more generic, so have to think through exactly what that is. Probably on an as-needed basis.
