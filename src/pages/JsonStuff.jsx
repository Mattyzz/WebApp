//Home.Js

export default function JsonStuff(){
  let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

  let userObj = JSON.parse(userStr);
    return (
        <main>
          <div className="center">
            <h2>Content boxes are examples of JSON.parse</h2>
            <p>json being used has name email and plan</p>


            <div className="column">
              <div className="content">
              <h2>Here is some parsed information</h2>
              <p>Name: {userObj.name}</p>
              <p>Email: {userObj.email}</p>
              <p>Plan: {userObj.plan}</p>
              </div>

              <div className="content">
                <h2>Inline Box Testing</h2>
                <p>Name: {userObj.name}</p>
                <p>Email: {userObj.email}</p>
                <p>Plan: {userObj.plan}</p>
              </div>

              <div className="content">
                <h2>Inline Box Testing 2</h2>
                <p>Name: {userObj.name}</p>
                <p>Email: {userObj.email}</p>
                <p>Plan: {userObj.plan}</p>
              </div>

              <h2>Check console log for JSON.stringify</h2>
              <div className="content">
                <h2>TODO</h2>
                <p>JSON.stringify</p>
                <p>No I'm not making a TODO-app... again</p>
              </div>

            </div>
          </div>
        </main> 
    );
}