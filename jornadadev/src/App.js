import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          likes={111}
          messages={222}
          shares={333}
          name="Andre"
          description="Miaaaauuuuu!"
          music="ihhhhhhhhhhhhh"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video 
          likes={444}
          messages={555}
          shares={666}
          name="John Doe"
          description="Bing!"
          music="clap clap clap clap clap"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/bird.mp4?alt=media&token=52abbeec-ff95-4acb-808e-5a4b4977d1da"
        />
      </div>
    </div>
  );
}

export default App;
