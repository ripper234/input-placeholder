input-placeholder
=================

Yet another HTML5 placeholder shim plugin.

There are a [ton of plugins](http://www.quora.com/JavaScript/Which-plugin-to-use-for-HTML5-placeholder-that-retains-the-label-on-focus) trying to emulate HTML5's placeholder attribute. This is yet another one.

**Key features**:

1. Does not delete a field's content when focused.
2. No messy CSS tricks required.

See [this fiddle](http://jsfiddle.net/ripper234/zSxjw/2/).

**Cons**:

1. Immature
2. Doesn't use the placeholder attribute/syntax, but rather uses the value attribute.
3. Two known bugs:
3. 1. In IE, selecting the default text will be weird
3. 2. In all browsers except Firefox, tabbing into the default text will cause a flickering effect.

**Usage**:

&lt;input name='email' value='Email Address'&gt;
