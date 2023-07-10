export default function HobbyLinks() {
    let hobbyLinks = ["https://www.ravelry.com/account/login", "https://www.geocaching.com/play"];
    
    return (
        <div>
            <h3>My Hobbies</h3>
            <ol>
               <li><a href={hobbyLinks[0]}>Ravelry</a></li>
               <li><a href={hobbyLinks[1]}>Geocaching</a></li>
            </ol>
    </div>
    )

}