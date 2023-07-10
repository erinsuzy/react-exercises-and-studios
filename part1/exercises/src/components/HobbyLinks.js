function hobbyLinks() {
    let hobbyLinks = [
        https://www.ravelry.com/account/login,
        https://www.geocaching.com/play
    ]
    return <a href = {hobbyLinks[0]}>Ravelry</a>,
    <a href = {hobbyLinks[1]}>Geocaching</a>
}