export default function BookList() {
   let pageTitle = "New Releases";
   let book1 = "https://nypost.com/wp-content/uploads/sites/2/2020/09/the-guest-room.jpg?resize=1018,1536&quality=75&strip=all";
   let book2 = "https://nypost.com/wp-content/uploads/sites/2/2020/09/the-manor-house.jpg?resize=1022,1536&quality=75&strip=all";
   let book3 = "https://nypost.com/wp-content/uploads/sites/2/2020/09/a-likeable-woman.jpg?resize=1018,1536&quality=75&strip=all";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} width="150" height="200" alt="The Guest Room by Tasha Sylva"/> 
         <img src={book2} width="150" height="200" alt="The Manor House by Gilly MacMillan" />
         <img src={book3} width="150" height="200" alt="A Likeable Woman by May Cobb" />
      </div>      
   );
}