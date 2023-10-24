# Awesome IPFS [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

This is a community list of awesome projects, apps, tools, and services related to IPFS.

To submit your project, read the [Content Policy](https://github.com/ipfs/awesome-ipfs/blob/main/CONTRIBUTING.md#content-policy), and [**submit a PR**](https://github.com/ipfs/awesome-ipfs/edit/main/README.md)

## Table of Contents

- [Implementations](#implementations)
- [Apps](#apps)
- [Browsers](#browsers)
- [Tools](#tools)
- [Services & Platforms](#services--platforms)
- [Pinning Services](#pinning-services)
- [Stale Projects](#stale-projects)
- [Contribute](#contribute)
- [License](#license)

## Implementations
IPFS is an open-source project that encourages the development of multiple implementations of the protocol, each of which seeks to optimize for various use cases.

Check out the list of [IPFS implementations](https://docs.ipfs.tech/concepts/ipfs-implementations/#popular-or-actively-maintained) in the IPFS docs.

## Apps

- [Agregore](https://github.com/AgregoreWeb/agregore-browser) - A minimal web browser for the distributed web. Supports downloading/uploading data from IPFS using the browser's `fetch()` API
- [Anytype](https://github.com/anyproto) - Anytype is a no-code, modular web builder designed to give ownership back to creators. It's built on our private, local-first, p2p-synced and open Anysync protocol.
- [archiveweb.page](https://github.com/webrecorder/archiveweb.page) - A High-Fidelity Web Archiving Extension for Chrome and Chromium based browsers with support for IPFS.
- [Autonomica "IPFS Social Proof"](https://github.com/IBM/ipfs-social-proof) - Autonomica is a Keybase-like Dapp for creating an identity and proving this identity via published social media and web proofs.
- [brig](https://github.com/sahib/brig) - File synchronization with git like interface and FUSE filesystem.
- [Diffuse](https://github.com/icidasset/diffuse) - Play music from your IPFS node, or any other cloud/distributed storage service you use.
- [Durin](https://durin.site/) - Mobile app for accessing and uploading content on the IPFS network.
- [Hardbin](https://github.com/jes/hardbin) - Hardbin is an encrypted pastebin, with the decryption key passed in the URL fragment
- [InterPlanetary Wayback](https://github.com/oduwsdl/ipwb) - Web Archive (WARC) indexing and replay using IPFS.
- [Interplanetary Wiki](https://github.com/jamescarlyle/ipfs-wiki) - Wiki built on top of IPFS
- [IPFessay](https://gitlab.com/stavros/IPFessay) - A simple way to publish uncensorable essays on IPFS.
- [IPFS Desktop](https://github.com/ipfs-shipyard/ipfs-desktop) - IPFS Desktop gives you all the power of IPFS in a convenient desktop app: a complete IPFS node, plus handy OS menubar/taskbar shortcuts and an all-in-one file manager, peer map, and content explorer.
- [ipfs-chat](https://github.com/SomajitDey/ipfs-chat) - Terminal-based, encrypted chatrooms. Allows private messaging & secure in-chat file/directory sharing. Server/broker-less (no signaling/rendezvous server needed). Works over LAN/internet(w/ NAT-traversal).
- [IPFS-FPS](https://github.com/underscoredLabs/webgl-ipfs-fps) - A completely decentralized first person shooter. Built with Unity, Fleek, Unstoppable Domans and Pinata.
- [IPGit](https://github.com/meyer1994/ipgit) - Remote Git repository that mirrors your code to IPFS
- [killcord](https://github.com/nomasters/killcord) - A censorship resistant deadman's switch
- [Mintter](https://github.com/MintterHypermedia/mintter) - an app for knowledge communities. Powered by the Hypermedia protocol.
- [orbitchat.dev](https://github.com/cppshane/orbit-chat) - Ultra simple chatrooms on the web.
- [Peer Web Site](https://github.com/Weedshaker/PeerWebSite) - Peer to Peer Web Site hosting at your fingertips! Send full featured HTML (incl. CSS, JS) sites from your browser and attach files eg. videos, images, etc.
- [Peergos](https://github.com/Peergos/Peergos) - End-to-end encrypted, peer-to-peer file storage and sharing.
- [PushToTalk](http://timothy.hobbs.cz/push-to-talk/index.html) - Push to Talk lets you edit audio essays and publish them with IPFS.
- [Skiff](https://github.com/skiff-org/skiff-mail) - Privacy-first, end-to-end encrypted email, file storage, and collaboration platform using IPFS storage.

## Browsers
A list of web browsers with IPFS integrations
- [Agregore](https://github.com/AgregoreWeb/agregore-browser) - A minimal web browser for the distributed web. Supports downloading/uploading data from IPFS using the browser's `fetch()` API
- [Brave](https://brave.com/ipfs-support/) - A privacy-focused browser with many future forward features.
- [galacteek](https://github.com/pinnaculum/galacteek) - A multi-platform Qt5-based browser for the distributed web.
- [Opera](https://blogs.opera.com/tips-and-tricks/2021/02/opera-crypto-files-for-keeps-ipfs-unstoppable-domains/) - Opera browser added support for `ipfs://` in 2021

## Tools

- [bifrost-gateway](https://github.com/ipfs/bifrost-gateway) - [EXPERIMENTAL] A lightweight IPFS Gateway daemon backed by a remote data store.
- [create-ipfs-app](https://github.com/alexbakers/create-ipfs-app) - Set up a decentralized web3 app by running one command.
- [dScan](https://github.com/p2plabsxyz/dscan) - A browser extension that uploads the content to Web3.Storage and generates QR codes for CIDs.
- [dump-ipfs](https://github.com/quasarch/dump-ipfs) - A decentralized encrypted backup agent for popular databases supported by IPFS and Filecoin.
- [gatsby-plugin-ipfs](https://github.com/moxystudio/gatsby-plugin-ipfs) - Adds support for deploying Gatsby websites to IPFS by ensuring that assets are relative.
- [git-ipfs-rehost](https://github.com/whyrusleeping/git-ipfs-rehost) - A script to rehost your git repos in ipfs.
- [git-remote-ipfs](https://github.com/cryptix/git-remote-ipfs) - push/pull repositories from/to IPFS.
- [Git IPFS Remote Bridge](https://github.com/ElettraSciComp/Git-IPFS-Remote-Bridge) - set of programs written in Python 3 which allow Git user to clone, push, fetch, self-host or release Git repositories over IPFS decentralized data storage system.
- [go-orbit-db](https://github.com/berty/go-orbit-db) - This is a Golang port of OrbitDB that intends to be fully compatible with the original JavaScript version. OrbitDB is a serverless, distributed, peer-to-peer database.
- [gomobile-ipfs](https://github.com/ipfs-shipyard/gomobile-ipfs) - IPFS and libp2p on Mobile, with Gomobile.
- [http2ipfs](https://github.com/jbenet/http2ipfs-web) - This is a simple webtool to add URLs to an IPFS node.
- [IPDR](https://github.com/miguelmota/ipdr) - IPFS-backed Docker Registry.
- [IPFS Setup Action](https://github.com/ibnesayeed/setup-ipfs) - A GitHub Action to install and initialize go-ipfs to provision a cross-platform test environment on GitHub's CI platform.
- [ipfs-action](https://github.com/aquiladev/ipfs-action) - GitHub Action for delivery of static websites.
- [ipfs-add-from-encrypted](https://github.com/TroyWilson1/ipfs-add-from-encrypted) - Encrypt a file or directory with AES256 then add to IPFS.
- [ipfs-companion](https://github.com/ipfs/ipfs-companion) - Browser extension that simplifies access to IPFS resources.
- [ipfs-deploy](https://github.com/agentofuser/ipfs-deploy) - Zero-config CLI to deploy static websites: cd my-static-website && npx @agentofuser/ipfs-deploy
- [ipfs-encrypted-share](https://github.com/whs/ipfs-encrypted-share) - Easy to use encrypted file uploader.
- [ipfs-mount](https://github.com/richardschneider/net-ipfs-mount) - Mount IPFS as a mapped drive on Windows.
- [ipfs-paste](https://github.com/jbenet/ipfs-paste) - Paste stdin and clipboard to IPFS.
- [ipfs-pinner](https://github.com/wabarc/ipfs-pinner) - A toolkit help upload files to IPFS pinning services.
- [ipfs-publish](https://github.com/auhau/ipfs-publish/) - Continuous Delivery tool for delivery of static websites from Git providers to IPFS.
- [ipfs-screencap](https://github.com/jbenet/ipfs-screencap) - Capture screenshots, publish them to IPFS, and copy the link to the clipboard.
- [ipfs-video-gateway](https://github.com/bneijt/ipfs-video-gateway) - Cloud-init your own IPFS gateway on a cloud provider and easily pin content through a simple web interface.
- [ipfsecret](https://github.com/shlemph/ipfsecret) - Encrypt and decrypt IPFS files with a secret passphrase.
- [ipget](https://github.com/ipfs/ipget) - :satellite: wget for IPFS: retrieve files over IPFS and save them locally.
- [IPLD Explorer](https://github.com/ipfs-shipyard/ipld-explorer) - Explore the Merkle Forest from the comfort of your browser.
- [ipns-pin](https://github.com/justicenode/node-ipns-pin) - A command-line tool to pin stuff via ipns.
- [IPRedirect](https://github.com/JayBrown/IPRedirect) - Browser userscript for redirecting IPFS/IPNS addresses to your local gateway. This should work on any browser that hasn't had an extension written for it yet and has support for userscripts.
- [iprfc](https://github.com/RTradeLtd/iprfc) - IETF RFC downloader which stores RFCs on IPFS and indexes them with RTradeLtd/Lens.
- [mahuta](https://github.com/ConsenSys/Mahuta) - Mahuta is a plug and play service for your micro-service architecture allowing to collect, store and index data on IPFS and offering search functionalities (full text, query).
- [Multiverse](https://github.com/multiverse-vcs/go-multiverse) - Multiverse is a decentralized version control system that enables peer-to-peer software development.
- [orbit-db](https://github.com/orbitdb/orbit-db) - OrbitDB is a serverless, distributed, peer-to-peer database that uses IPFS as its data storage and IPFS Pubsub to automatically sync databases with peers.
- [Pin Tweet to IPFS](https://github.com/meandavejustice/pin-tweet-to-ipfs) - Web Extension which creates a WebArchiveZip of a tweet and adds to IPFS network.
- [Public Gateway Checker](https://github.com/ipfs/public-gateway-checker) - Checks which public gateways are online or not.
- [rivet](https://github.com/wabarc/rivet) - A toolkit makes it easier to archive webpages to IPFS.
- [SimpleAsWater Bot](https://github.com/simpleaswater/twitter-pinbot) - A twitter bot that adds, pins, unpins your tweets to public IPFS network using IPFS Cluster.
- [solid-ipfs](https://github.com/Eximua/solid-ipfs) - Using Solid to store IPFS Hash privately or publicly.
- [Tellit](https://gitlab.com/terceranexus6/tellit) - Encrypt files before uploading them using a keypair or a passphrase.
- [VIPFS](https://github.com/Ideea-inc/vipfs) - Publish your Vue apps easily to IPFS.
- [wbipfs](https://github.com/wabarc/wbipfs) - A command-line tool and Go package interface for wayback webpage to IPFS.
- [youtube2ipfs](https://github.com/dokterbob/youtube2ipfs) - Download videos from YouTube (and similar video platforms) and add them to IPFS.

## Services & Platforms

- [Ceramic](https://ceramic.network/) - Ceramic combines IPFS content addressing with advanced cryptography and blockchain timestamps to guarantee security and verifiability of data.
- [dAppling](https://www.dappling.network/) - Hosting platform with automated deployments from GitHub to IPFS
- [Fileverse](https://fileverse.io/) - Encrypted file sharing based on IPFS. Share any files with or without a wallet
- [Fleek](http://fleek.co/) - Open Web development platform for building, hosting, and storing sites and apps on IPFS, Filecoin, and the Internet Computer.
- [Fission](https://fission.codes) - Fission builds open source protocols and managed solutions that empower developers to construct scalable and secure software applications.
- [Peergos](https://peergos.org) - Your private, but social, space online. Store and edit documents and media. Share files or folders with friends.
- [Valist](https://www.valist.io/) - A trustless universal package repository enabling you to digitally sign and distribute software in just a few steps.

## Pinning services
- [4EVERLAND](https://www.4everland.org/) - 4EVERLAND is a pinning service that provides IPFS infrastructure and tooling making it easier and faster to host frontends, store data/NFT/file and fetch data with IPFS.
- [Filebase](https://filebase.com/) - Pinning data to IPFS can be hard. Filebase removes that complexity.
- [NFT.Storage](https://nft.storage/) - Free decentralized storage and bandwidth for NFTs on IPFS & Filecoin.
- [Pinata](https://pinata.cloud) - Build and manage your dapp through Pinata’s REST API and IPFS toolkit.
- [Infura](https://infura.io) - Scalable and distributed storage infrastructure for your application.
- [Kriptonio](https://kriptonio.com/) - Pinning service & Web3 Platform for building Web3 apps.
- [Scaleway](https://labs.scaleway.com/en/ipfs-pinning/) - A multi-region, multi-az redundant IPFS pinning service.
- [Spheron](https://spheron.network) - Spheron offers IPFS pinning service and dedicated gateways.
- [Web3.storage](https://web3.storage/) - Simple file storage with IPFS & Filecoin.

## Stale Projects
We maintain a list of no longer maintained projects for reference. If you see something on this list that's no longer maintained, please submit a pr and we'll get it into the right place.

[View the list here](./stale.md)

## Contribute

Contributions are welcome!

See the [**Contribution Guidelines**](./CONTRIBUTING.md).

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
