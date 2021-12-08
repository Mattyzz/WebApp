/*
This is where I use fetch to pulled data from the Mojang API based on a UUID.
The UUID will be used to obtain the user name and character head icon.
This will then be displayed to the webpage.
*/

export default function Minecraft(){
    let response = fetch('https://sessionserver.mojang.com/session/minecraft/profile/0f3a1e5285a0418aa8d1234efdf7e3e3');
    let data = response.json();

    
    return (
        <main>
          <div className='center'>
            <h2>Welcome to the Minecraft Page!</h2>
          </div>
          <p className='center'>I will be fetching data from the Mojang API and displaying it on this page</p>
          <p className='center'>{data[0].name}</p>

        </main> 
    );
}