TODO:

- [x] 200-200 -> 200-300: Fade the title only
- [x] 200-300 -> 200-400: Keep all the base elements exactly the same and only fade the title. Keep the filename and code background in place.
- [x] 200-400 -> 200-500: Fade out the filename and code block, fade in the subtitle (title doesn't change)
- [ ] 300-300 -> 300-400: Fade out everything except the logo
- [ ] 300-400 -> 300-500: Fade out everything except the logo
- [ ] 300-500 -> 300-600: Only fade the title. Keep the filename and code block, like in the one above.
- [ ] 300-600 -> 300-700: Fade out everything except the logo
- [ ] 300-700 -> 300-800: Fade out everything except the logo

Abstraction opportunities:

- [ ] Idea -> Shared components for each section to make fading easier to control and to keep elements in the same place
- [ ] `interpolate` that assumes `extrapolateRight: clamp` as the only option.
- [ ] Code frame styles. The functionality may not make sense, but maybe the classes. Maybe it's just a Tailwind component?
- [ ] Hook for simple transitions?
- [ ] Hook for scroll transitions?
- [ ] `TimelineComponent` and `TimelineComponentProps` if it seems like they are all going to be the same.
- [ ] When it comes time to build a second video, abstracting reusable layouts could be super beneficial. But this will take a bit of effort to make them more generic, so have to think through exactly what that is. Probably on an as-needed basis.
