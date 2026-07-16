# [Scaling, stretching and shifting sinusoids](https://eli.thegreenplace.net/2026/scaling-stretching-and-shifting-sinusoids/)

May 02, 2026 at 07:17

This is a brief and simple [\[1\]](https://eli.thegreenplace.net/#footnote-1) explanation of how to adjust the
standard sinusoid sin(x) to change its amplitude, frequency and
phase shift. More precisely, given the general function:

\\\[s(x)=A\\cdot sin(w\\cdot x+\\theta)\\\]

We’ll see how adjusting the parameters ![A](https://eli.thegreenplace.net/images/math/6dcd4ce23d88e2ee9568ba546c007c63d9131c1b.png), ![w](https://eli.thegreenplace.net/images/math/aff024fe4ab0fece4091de044c58c9ae4233383a.png) and
![\theta](https://eli.thegreenplace.net/images/math/cb005d76f9f2e394a770c2562c2e150a413b3216.png) affect the shape of s(x). Each section below
covers one of these aspects mathematically, and you can use the demo at
the bottom to experiment with the topic visually.

## Scaling

Scaling is conceptually the simplest change; we adjust ![A](https://eli.thegreenplace.net/images/math/6dcd4ce23d88e2ee9568ba546c007c63d9131c1b.png) to
increase or decrease the amplitude (maximal height) of s(x). Setting
A=2 will make the ![y](https://eli.thegreenplace.net/images/math/95cb0bfd2977c761298d9624e4b4d4c72a39974a.png) value twice as large (in both the positive
and negative direction) as the original function.

## Stretching

Stretching changes the frequency of sin(x), which is inverse
proportional to its period. The baseline function sin(x) has a
period of 2\\pi, meaning it repeats every 2\\pi. In other
words, sin(x)=sin(x+2\\pi) for any ![x](https://eli.thegreenplace.net/images/math/11f6ad8ec52a2984abaafd7c3b516503785c2072.png).

If we set w=2, we get sin(2x). This function repeats
itself twice as fast as sin(x), because ![x](https://eli.thegreenplace.net/images/math/11f6ad8ec52a2984abaafd7c3b516503785c2072.png) is multiplied
by 2 before being fed into the sinusoid. If ![x](https://eli.thegreenplace.net/images/math/11f6ad8ec52a2984abaafd7c3b516503785c2072.png) changes by
\\pi, the sinusoid’s input changes by 2\\pi.
Therefore, the period of sin(2x) is \\pi, the period of
sin(4x) is \\frac{\\pi}{2} and so on. [\[2\]](https://eli.thegreenplace.net/#footnote-2)

More generally, the period of sin(wx) is \\frac{2\\pi}{w}.
Play with the demo below to see this in action, by changing ![w](https://eli.thegreenplace.net/images/math/aff024fe4ab0fece4091de044c58c9ae4233383a.png)
and observing how the waveform changes.

If we know the period p we want, we can easily calculate the
![w](https://eli.thegreenplace.net/images/math/aff024fe4ab0fece4091de044c58c9ae4233383a.png) that gives us this period:

\\\[p=\\frac{2\\pi}{w} \\implies w=\\frac{2\\pi}{p}\\\]

## Shifting

The final parameter we discuss is ![\theta](https://eli.thegreenplace.net/images/math/cb005d76f9f2e394a770c2562c2e150a413b3216.png); it’s called the
_phase_ of the sinusoid. In the baseline sin(x),
![\theta=0](https://eli.thegreenplace.net/images/math/a1dffbe89f1ec5a919198de979fca459eb7fdf84.png). The sinusoid is 0 at x=0, achieves its
positive peak at x=\\frac{\\pi}{2}, crosses 0 again at
x=\\pi, negative peak at x=\\frac{3\\pi}{2} and returns to
its original position at x=2\\pi where the repetition begins.

By adding a non-zero ![\theta](https://eli.thegreenplace.net/images/math/cb005d76f9f2e394a770c2562c2e150a413b3216.png), we don’t affect the sinusoid’s
amplitude or frequency, but we do shift it right or left along the
![x](https://eli.thegreenplace.net/images/math/11f6ad8ec52a2984abaafd7c3b516503785c2072.png) axis. For example, suppose we use the function
sin(x+\\theta) with \\theta=\\frac{\\pi}{2}. Then when
x=0, we have sin(\\frac{\\pi}{2}), so the sinusoid is
already at its positive peak; at x=\\frac{\\pi}{2}, the sinusoid
crosses 0 into the negatives, etc. Everything happens earlier (by
exactly the value of \\theta=\\frac{\\pi}{2}) than in the baseline
sinusoid. In other words, we’ve shifted the function _left_ by
\\frac{\\pi}{2}. Similarly, when ![\theta](https://eli.thegreenplace.net/images/math/cb005d76f9f2e394a770c2562c2e150a413b3216.png) is negative,
everything happens later, and the function is shifted _right_.

## Putting it all together

We’ve now gone over all the parameters for the function:

\\\[s(x)=A\\cdot sin(w\\cdot x+\\theta)\\\]

- ![A](https://eli.thegreenplace.net/images/math/6dcd4ce23d88e2ee9568ba546c007c63d9131c1b.png) controls the scaling factor (amplitude).
- ![w](https://eli.thegreenplace.net/images/math/aff024fe4ab0fece4091de044c58c9ae4233383a.png) is the frequency and controls the repetition period
- ![\theta](https://eli.thegreenplace.net/images/math/cb005d76f9f2e394a770c2562c2e150a413b3216.png) controls the phase - how much the sinusoid is shifted
left or right

Use the demo below to adjust these parameters and observe their effect on
the sinusoid:

Your browser does not support the HTML5 canvas tag.


A

ω

θ


* * *

|     |     |
| --- | --- |
| [\[1\]](https://eli.thegreenplace.net/#footnote-reference-1) | The math level of this post is high-school, at best. My main goal<br>here is to test how to integrate interactive demos into my blog<br>posts. |

|     |     |
| --- | --- |
| [\[2\]](https://eli.thegreenplace.net/#footnote-reference-2) | This can be a bit counter-intuitive at first; we scale ![w](https://eli.thegreenplace.net/images/math/aff024fe4ab0fece4091de044c58c9ae4233383a.png) by<br>2, but the period scales by half. Why? The reason is that ![w](https://eli.thegreenplace.net/images/math/aff024fe4ab0fece4091de044c58c9ae4233383a.png)<br>affects the sinusoid’s _domain_, while the period is a property of<br>its _range_. Therefore, an inverse relation is reasonable, once we<br>put more thought into it. In fact, ![w](https://eli.thegreenplace.net/images/math/aff024fe4ab0fece4091de044c58c9ae4233383a.png) is often called the<br>_angular frequency_ of the sinusoid, and frequency is inverse<br>proportional to the period. |

* * *

### Recent posts

|     |     |
| --- | --- |
| 2026.04.29: | [Thoughts on WebAssembly as a stack machine](https://eli.thegreenplace.net/2026/thoughts-on-webassembly-as-a-stack-machine/) |
| 2026.04.22: | [Debugging WASM in Chrome DevTools](https://eli.thegreenplace.net/2026/debugging-wasm-in-chrome-devtools/) |
| 2026.04.09: | [watgo - a WebAssembly Toolkit for Go](https://eli.thegreenplace.net/2026/watgo-a-webassembly-toolkit-for-go/) |
| 2026.03.31: | [Summary of reading: January - March 2026](https://eli.thegreenplace.net/2026/summary-of-reading-january-march-2026/) |
| 2026.02.28: | [Notes on Lagrange Interpolating Polynomials](https://eli.thegreenplace.net/2026/notes-on-lagrange-interpolating-polynomials/) |
| 2026.02.25: | [Notes on Linear Algebra for Polynomials](https://eli.thegreenplace.net/2026/notes-on-linear-algebra-for-polynomials/) |
| 2026.02.04: | [Rewriting pycparser with the help of an LLM](https://eli.thegreenplace.net/2026/rewriting-pycparser-with-the-help-of-an-llm/) |
| 2026.01.17: | [Compiling Scheme to WebAssembly](https://eli.thegreenplace.net/2026/compiling-scheme-to-webassembly/) |
| 2025.12.31: | [Summary of reading: October - December 2025](https://eli.thegreenplace.net/2025/summary-of-reading-october-december-2025/) |
| 2025.12.17: | [Plugins case study: mdBook preprocessors](https://eli.thegreenplace.net/2025/plugins-case-study-mdbook-preprocessors/) |

See [Archives](https://eli.thegreenplace.net/archives/all) for a full list.


![](https://stats.thegreenplace.net/count?p=%2F&r=https%3A%2F%2Fwww.google.com%2F&t=Eli%20Bendersky%27s%20website&s=800%2C600%2C1&b=0&rnd=6zrfk)