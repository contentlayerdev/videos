TODO:

- [ ] Don't fade out between sequences that can stay tied together. Keep relevant pieces on screen.

Abstraction opportunities:

- [ ] `interpolate` that assumes `extrapolateRight: clamp` as the only option.
- [ ] Code frame styles. The functionality may not make sense, but maybe the classes. Maybe it's just a Tailwind component?
- [ ] Hook for simple transitions?
- [ ] Hook for scroll transitions?
- [ ] `TimelineComponent` and `TimelineComponentProps` if it seems like they are all going to be the same.
- [ ] When it comes time to build a second video, abstracting reusable layouts could be super beneficial. But this will take a bit of effort to make them more generic, so have to think through exactly what that is. Probably on an as-needed basis.
