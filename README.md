# Awesome IPFS [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://ipfs.io/)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)

> Useful resources for using [IPFS](https://ipfs.io) and building things on top of it

_This list is for projects, tools, or pretty much any things related to IPFS that
are totally_ **awesome**_. This is for products which are already awesome - if
you have plans for cool stuff to do with IPFS, you should build it, and then
link it here. If you have an idea for an awesome thing to do with IPFS, a good
place to ask about it might be in [ipfs/apps](https://github.com/ipfs/apps) or
[ipfs/notes](https://github.com/ipfs/notes)._

## Table of Contents

- [Apps](#apps)
  - [Single page Webapps](#single-page-webapps)
- [Tools](#tools)
- [Videos](#videos)
- [Archives](#archives)
- [Articles and Press](#articles-and-press)
  - [Articles independently hosted on IPFS](#articles-independently-hosted-on-ipfs)
- [Discussions](#discussions)
- [Contribute](#contribute)
  - [Want to hack on IPFS?](#want-to-hack-on-ipfs)
- [License](#license)

## Apps

* [akasha](http://akasha.world/) - A Next-Generation Social Media Network, powered by Ethereum and embedded into IPFS.
* [Beaker Browser](https://beakerbrowser.com/) - An experimental P2P browser that can view files over HTTP, IPFS, and [Dat](https://datproject.org/).
* [beets](https://github.com/beetbox/beets) - Beets has a plugin which allows for easy sharing of music libraries using IPFS
* [Boards](https://ipfs.io/ipns/boards.ydns.eu) - Distributed social platform that runs in the browser. [GitHub](https://github.com/fazo96/ipfs-boards)
* [Cohort](https://github.com/zignig/cohort) - A golang app to preset a threejs interface and get all of its assets out of IPFS.
* [dapple](https://github.com/nexusdev/dapple) - Dapple is a Solidity developer multitool designed to manage the growing complexity of interconnected smart contract systems.
* [digx](https://www.dgx.io/) - Digix is an asset-tokenisation platform built on Ethereum and IPFS.
* [Ethlance](http://ethlance.com) - First completely decentralised job market platform built on Ethereum and IPFS. [Github](https://github.com/madvas/ethlance)
* [git-ipfs-rehost](https://github.com/whyrusleeping/git-ipfs-rehost) - A script to rehost your git repos in ipfs.
* [Global Upload](https://globalupload.io/) - File transportation service for IPFS, upload files to the future of distributed web.
* [HydrusNetwork](https://github.com/hydrusnetwork/hydrus) - A booru-style media tagging application with a multitude of features, recently added basic ipfs support.
* [InterPlanetary Wayback](https://github.com/oduwsdl/ipwb) - Web Archive (WARC) indexing and replay using IPFS.
* [Interplanetary Wiki](https://github.com/jamescarlyle/ipfs-wiki) - Wiki built on top of IPFS
* [IPFS Event Drop](https://github.com/travisperson/ipfs-event-drops) - An app that allows for improved visualization of ipfs events.
* [ipfs.ink](https://ipfs.ink) - Publish and render markdown essays to and from ipfs. [GitHub](https://github.com/kpcyrd/ipfs.ink)
* [ipfs-search](http://ipfs-search.com) - Search engine for files and directories on IPFS.
* [ipfs-share](https://github.com/rameshvarun/ipfs-share) - Pastebin/Image host/File sharing application
* [ipfs-userscript](https://github.com/loadletter/ipfs-redirect-userscript) -  Browser userscript for redirecting gateway.ipfs.io links to your local gateway. This should work on any browser that hasn’t had an extension written for it yet and has support for userscripts.
* [ipfs.pics](https://ipfs.pics) - Upload and share pics. [GitHub](https://github.com/ipfspics/ipfspics-server)
* [IPFSBin](https://github.com/victorbjelkholm/ipfsbin) - Pastebin clone build.
* [markup.rocks](https://github.com/davidar/markup.rocks) - Pandoc-based markup editor/previewer/converter, ported to IPFS. [Example](https://ipfs.io/ipfs/QmWPgJnUGLB1LPh9KMG9LEN4LVu5e17TwkEtcmTWdNn9V6/#/ipfs/QmfQ75DjAxYzxMP2hdm6o4wFwZS5t7uorEZ2pX9AKXEg2u)
* [Orbit](https://github.com/haadcode/orbit) - Distributed, peer-to-peer chat application on IPFS.
* [Philes](http://philes.co) - Philes is a browser-based, IPFS-powered distributed notepad (editor & viewer).
* [Playback](https://mafintosh.github.io/playback/) - IPFS playback support. This allows casting a video in IPFS to a Chromecast.
* [ujo](http://ujomusic.com/) - A blockchain marketplace for musicians.
* [uport](https://uport.me/#home) - Uport is a mobile, self-sovereign identity and key management system, built on the Ethereum blockchain.

### Single page Webapps

These are narrowly-scoped, little JS "apps" deployed through IPFS.

- [a markdown renderer](https://github.com/ipfs/examples/tree/master/webapps/markdown-viewer) - [example](
  https://ipfs.io/ipfs/QmSrCRJmzE4zE1nAfWPbzVfanKQNBhp7ZWmMnEdbiLvYNh/mdown#/ipfs/QmfQ75DjAxYzxMP2hdm6o4wFwZS5t7uorEZ2pX9AKXEg2u
)
- [a js video player](https://github.com/ipfs/examples/tree/master/webapps/play) - [example](
  https://ipfs.io/ipfs/QmVc6zuAneKJzicnJpfrqCH9gSy6bz54JhcypfJYhGUFQu/play#/ipfs/QmTKZgRNwDNZwHtJSjCp6r5FYefzpULfy37JvMt9DwvXse
)
- [a qr-code renderer](https://github.com/ipfs/examples/tree/master/webapps/qr-render) - [example](
  https://ipfs.io/ipfs/QmccqhJg5wm5kNjAP4k4HrYxoqaXUGNuotDUqfvYBx8jrR/qr#enter%20text%20here
)
- [hasteIPFS](https://ipfs.io/ipns/bin.ipfs.ovh/) - IPFS based code bin. (Read only for now)
- [Gorilla REPL viewer](https://github.com/keorn/ipfs-gorilla-repl) - [example](https://ipfs.io/ipfs/QmRNUauWDvZFkAp1Bw3kAode3jT8aH2vx7LYzbS7H6R3Mg/view.html?path=/ipfs/QmbRdyLXiFWrKc5hW1NbvpUxF9tLovWCPgiz4BDhjD9k3j)

## Tools

* [cachewarmer](https://github.com/BrendanBenshoof/cachewarmer) - Donate ipfs gateways to cache other people's content
* [git-remote-ipfs](https://github.com/cryptix/git-remote-ipfs) - push/pull repositories from/to IPFS
* [http2ipfs](https://github.com/jbenet/http2ipfs-web) - This is a simple webtool to add URLs to an IPFS node.
* [ipcat](https://github.com/noffle/ipcat) - :cat2: Retrieve IPFS object data and send it to stdout.
* [ipfs-chrome-station](https://github.com/fbaiodias/ipfs-chrome-station) - Chrome extension to redirect ipfs.io traffic to local gateway
* [ipfs-chrome-extension](https://github.com/dylanPowers/ipfs-chrome-extension) - Chrome extension to redirect ipfs.io traffic to local gateway
* [ipfs-firefox-addon](https://github.com/lidel/ipfs-firefox-addon) - Firefox addon to provide access to IPFS via local gateway
* [ipfs-linux-service](https://github.com/dylanPowers/ipfs-linux-service) - IPFS Linux Init Daemon
* [ipfs-paste](https://github.com/jbenet/ipfs-paste) - Paste stdin and clipboard to IPFS
* [ipfs-screencap](https://github.com/jbenet/ipfs-screencap) - Capture screenshots, publish them to IPFS, and copy the link to the clipboard.
* [ipfscrape](https://github.com/victorbjelkholm/ipfscrape) - Scrape a webpage with all assets and put it in IPFS
* [ipget](https://github.com/ipfs/ipget) - :satellite: wget for IPFS: retrieve files over IPFS and save them locally.
* [ipscend](https://github.com/diasdavid/ipscend) - Tool for hosting web apps and static websites in IPFS
* [pinbot](https://github.com/whyrusleeping/pinbot) - Pin content via IRC
* [ipfs-mount](https://github.com/richardschneider/net-ipfs-mount) - Mount IPFS as a mapped drive on Windows
* [ipfs-add-from-url](https://github.com/maxlath/ipfs-add-from-url) - Add a file to IPFS from a URL instead of a file path

## Videos

* [IPFS Alpha - Why we must redistribute the web](https://www.youtube.com/watch?v=skMTdSEaCtA) (YouTube)
* [Juan Benet at Stanford 2015](https://www.youtube.com/watch?v=HUVmypx9HGI) (YouTube)
* [Juan Benet at Fullstack Fest 2016](https://www.youtube.com/watch?v=jONZtXMu03w) (YouTube) ([IPFS Mirror](https://ipfs.io/ipfs/QmX8LDhDSYdX3xG6cHFUybXLDSuvo9Lz6wF5NU3UVmJRnB))

## Archives

## Articles and Press

* 2017-03-31: [Using IPFS for IoT Communications](https://medium.com/@chrismatthieu/using-ipfs-for-iot-communications-b49c2139783a) (medium.com)
* 2016-09-12: [IPFS: The Internet Democratised](https://medium.com/@tonywillenberg/web-3-0-a-truly-democratised-internet-f4b06cb4077b) (medium.com)
* 2016-05-20: [Changelog Podcast](https://changelog.com/204/) (changelog.com)
* 2015-09-10: [First Steps Toward Implementing Distributed Permanent Web With IPFS](https://hacked.com/first-steps-toward-implementing-distributed-permanent-web-ipfs/) (Hacked.com)
* 2015-09-13: [Introduction to IPFS](http://whatdoesthequantsay.com/2015/09/13/ipfs-introduction-by-example) (whatdoesthequantsay.com)
* 2015-09-18: [The InterPlanetary File System Wants to Create a Permanent Web](http://motherboard.vice.com/read/the-interplanetary-file-system-wants-to-create-a-permanent-web) (Vice // Motherboard)
* 2015-11-01: [Eris + IPFS](http://db.erisindustries.com/distributed%20business/2015/11/01/eris-and-ipfs/) (erisindustries.com)

### Articles independently hosted on IPFS
* 2015-09-08: [HTTP is obsolete. It's time for the distributed, permanent web](https://ipfs.io/ipfs/QmNhFJjGcMPqpuYfxL62VVB9528NXqDNMFXiqN5bgFYiZ1/its-time-for-the-permanent-web.html)
* [Downloading nodejs versions with nvm/n over IPFS](https://ipfs.io/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/example#/ipfs/QmUx363UFtgiQqkHHsPK3TSDmwoALDo2hrbMWbcxjH2vFc) (ipfs.io)

## Discussions

* [CRDTs discussion](https://github.com/ipfs/notes/issues/23)

## Contribute

Please add (or remove) stuff from this list if you see anything awesome! [Open an issue](https://github.com/ipfs/awesome-ipfs/issues) or a PR.

### Want to hack on IPFS?

[![](https://cdn.rawgit.com/jbenet/contribute-ipfs-gif/master/img/contribute.gif)](https://github.com/ipfs/community/blob/master/contributing.md)

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
