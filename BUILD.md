# Building From Source

This repository contains a hot-reloading sandbox for developing the `@upload-io/jquery-uploader` NPM package.

## Prerequisites

`node` and `npm` are required — we actively support the following versions:

| Package | Version  |
| ------- | -------- |
| Node    | v18.12.1 |
| NPM     | v8.19.2  |

## How To Build & Run

### 1. Clone

```shell
git clone git@github.com:bytescale/jquery-uploader.git
cd jquery-uploader
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

The above launches a **hot-reloading** server on `http://127.0.0.1:3050` that uses `@upload-io/jquery-uploader` from source.

_Please ensure nothing else is running on TCP port `3050`_.
