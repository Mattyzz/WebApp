/*
This is where I use fetch to pulled data from the Mojang API based on a UUID.
The UUID will be used to obtain the user name and character head icon.
This will then be displayed to the webpage.
*/

export default function Minecraft(){

    fetch('https://api.mojang.com/users/profiles/minecraft/Mattyzz')
      .then(data => data.json())
      .then(success => console.log(success.name));



        return (
        <main>
          <div className='center'>
            <h2>Welcome to the Minecraft Page!</h2>
          </div>
          <p className='center'>I will be fetching data from the Mojang API</p>
          <p className='center'>The data is outputted to console at this time</p>


        </main> 
    );
}