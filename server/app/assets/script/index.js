








function getHTMLFromUser(discordUser) {
    let userHTML = `
<div class="user">
    <div class="banner" style="background-image: url('https://cdn.discordapp.com/banners/477551434271948811/2cf3219d535ab0d98fb26ea490a36c4d.png?size=1024')"></div>
    <div class="bar">
        <div class="avatar" style="background-image: url('https://cdn.discordapp.com/avatars/477551434271948811/8a99deb56dfa8de340eb36b071b7e77c.webp?size=1024')"></div>
        <div class="badges">
            <div title="HypeSquad Bravery" class="badge" style="background-image: url('https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png');"></div>
            <div title="DiscordTag developer" class="badge" style="background-image: url('/favicon.ico');"></div>
            <div title="Active developer" class="badge" style="background-image: url('https://cdn.discordapp.com/badge-icons/6bdc42827a38498929a4920da12695d9.png');"></div>
            <div title="Nitro" class="badge" style="background-image: url('https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png');"></div>
        </div>
    </div>
    <div class="contain">
        <div class="username">DioxydeCarb#0041</div>
        <div class="separator"></div>
        <button>Ajouter en ami</button>
    </div>
</div>`
    return userHTML

}