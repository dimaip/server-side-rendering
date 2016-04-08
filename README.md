# Interactive Guide to Server-side rendering with Webpack, React, React Transmit, CSS modules and more

Follow the tutorial commit-by-commit, to see the server-side rendering drama unfold with a happy ending!

[CLICK TO GET STARTED](https://github.com/dimaip/server-side-rendering/commits/master)


## Contents (mostly for Google)

### [Step 1: minimal Webpack, Babel and React setup](https://github.com/dimaip/server-side-rendering/commit/7d1d0677bca0ea94e820dc7e156c89e83ef823bb)

RUN: `npm run start` and then open index.html in the browser.

Webpack helps us to bundle our code with dependencies from npm
(such as React), and then transforms the code with Babel, to make
it compatible with ES5.

### [Step 2: trivial server-side rendering with Express](https://github.com/dimaip/server-side-rendering/commit/fad6b64e4ec3ee6b378c6ab0abd36f03fdba7c77)

RUN: `npm run start` and go to `http://localhost:3000`.

Now we are rendering the same Hello component both on client and server:
with express server we pre-render the Hello component on the server, and
server the client with rendered html, and with webpack we continue to
bundle client.js into ES5 code that the browser would understand,
just as we did at previous step.

### [Step 3: add styles](https://github.com/dimaip/server-side-rendering/commit/53d2ffa7bc9319722addced5bb94c5b231726a1b)

Now lets learn to deal with styles. We configure webpack loaders to
support loading CSS files. This is cool, but there comes one problem
with server-side rendering: styles won't be loaded until all of JS loads,
so no styles for devices without JS.

Let's fix this problem with webpack's ExtractTextPlugin plugin: it
extracts all CSS styles into one CSS file that we can serve to our client,
so our page will instantly look perfectly styled, even without JS.

### [Step 3a: switch to CSS modules](https://github.com/dimaip/server-side-rendering/commit/e2c02444b1e7c6ec349511aa9b2da1a52aba5474)

Everybody loves CSS modules, and the great news is that they come free with Webpack.
The bad news is that we can't use them with server-side rendering, as we don't use
Webpack when rendering on the server-side.

So at this step we broke everything, and the only way to continue from here, is to
start using Webpack to pre-build code for server-side rendering too, and that's
what we'll do at the next step.

### [Step 3b: save the day by making webpack to render server-side code](https://github.com/dimaip/server-side-rendering/commit/6e36b9690816d414ca36775c6487e0b6dbd8abe3)

To save our issue with CSS modules, we make Webpack to render both
our client and our server side code. The best way to do it is to
use Webpack's abillity to handle array of configs.

With first config we transform our client-side code (`client.js`),
just as we were doing before. But with the second config we transform
`handleRender` function that we have extracted into `serverEntry.js`,
so now our server-side rendering code gets processed by Webpack too.
There we use css-loader/locals as a CSS loader, to just get class names from
CSS modules, as that's all we need to render html on the server.
Also notice how we use `target:node` and `nodeExternals`.

Great! Now our build is fixed, so we can use CSS modules both during client
and server rendering.


### [Step 4a: asyncronously fetching data](https://github.com/dimaip/server-side-rendering/commit/d9ce281b88d142cf52861223a201de6d47dfd428)

Now let's fetch some data asyncronously. We'll use isomorphic-fetch,
as it works both on client and server our of the box.

Fetching data works just fine on the server, but the problem is that
on the server we didn't wait for fetch to finish fetching the data
before sending the response, so our pre-rendered html doesn't have any
async data when it arrives.
Let's try to fix it in the next step.


### [Step 4b: use react-transmit to declaratively define data deps](https://github.com/dimaip/server-side-rendering/commit/HEAD)

There are multiple ways to solve async rendering issue. Here we'll
use react-transmit to declaratively define our data dependencies per component,
and return rendered html only when all data is resolved.

It works even with nested components, constructing the single promises tree,
which is qute cool. It is inspired by Facebook Relay, so if you are familiar
with it, you'll feel right at home.


## That's all, folks!

Got more tips or challenges with server-side rendering of React? Submit a PR!
