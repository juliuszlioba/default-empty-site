# default-empty-site

Simple default empty page generator.<br>
Uses [Vite](https://vitejs.dev/) bundler to merge html and css in one output file.

## Use

Download and install with npm
```bash
git clone git@github.com:juliuszlioba/default-empty-site.git
cd default-empty-site
npm install
```

edit `./index.html`

```html
...
<div class="p-2">
  <h1 class="text-center text-5xl font-semibold">
    <span class="animate-gradient bg-gradient-to-r from-rose-700 to-fuchsia-800 bg-animate-gradient bg-clip-text text-transparent">
    Hello!
    </span>👋
  </h1>
</div>
<p class="text-center text-white">This is default website of domain</p>
<a href="//juliuszlioba.com" class="text-center text-white hover:text-fuchsia-800">
  juliuszlioba.com
</a>
...
```
build
```bash
npm run build
```
Finished website will be in `dist` folder.<br> Simply copy all content.

### Screenshot:

<img src="./sreenshot.png" width="800" height="600"/>