# Building From Source

This repository contains a hot-reloading sandbox for developing the `@bytescale/upload-widget-jquery` NPM package.

## Prerequisites

`node` and `npm` are required — we actively support the following versions:

| Package | Version  |
| ------- | -------- |
| Node    | v18.12.1 |
| NPM     | v8.19.2  |

## How To Build & Run

### 1. Clone

```shell
git clone git@github.com:bytescale/bytescale-upload-widget-jquery.git
cd bytescale-upload-widget-jquery
```

### 2. Setup Environment

```
export NODE_OPTIONS=--openssl-legacy-provider
```

### 3. Install Dependencies

```shell
npm install
```

### 4. Run The Sandbox

```shell
npm start
```

The above launches a **hot-reloading** server on `http://127.0.0.1:3050` that uses `@bytescale/upload-widget-jquery` from source.

_Please ensure nothing else is running on TCP port `3050`_.
