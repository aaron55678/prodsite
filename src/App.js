import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import AddPlayer from "./components/players/AddPlayer";
import Players from "./components/players/Players";
import WrappedMap from "./components/outputs/Map";
import OutputOptions from "./components/outputs/OutputOptions";
import { margin, positions } from "@mui/system";




const App = () => {
  const [addedPlayer, setAddedPlayer] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(false);

  const playerStatusChangeHandler = (playerId) => { //method to add player to data array
    setAddedPlayer((prevAddedPlayer) => {
      if (prevAddedPlayer.length === 0) {
        return [{ id: playerId, name: "", postcode: "" }];
      } else {
        return [...prevAddedPlayer, { id: playerId, name: "", postcode: "" }]; //using passed up player id to construct player array
      }
    });
    

  };

  const deletedPlayerChangeHandler = (removedId) => { //method to remove player
    setAddedPlayer(() => {
      return addedPlayer.filter((player) => player.id !== removedId); //filtering player array to remove deleted player
    });
  };

  const playerDataChangeHandler = (playerChange, playerId) => {
    
    addedPlayer.forEach((el,index)=>{
      if(addedPlayer[index].id === playerId){
        return addedPlayer[index].name = playerChange;
      }
      else{
        return;
      };
    });
    setAddedPlayer(addedPlayer);
      
    
    //i believe this function is working but i think it is one entry behind
  };

  const postcodeDataChangeHandler = (postcodeChange, playerId) => {
    addedPlayer.forEach((el,index)=>{
      if(addedPlayer[index].id === playerId){
        return addedPlayer[index].postcode = postcodeChange;
      }
      else{
        return;
      };
    });
    setAddedPlayer(addedPlayer);
    //this function is also one entry behind
  };

  const searchStatusChangeHandler = (status) => {
    if(status === '200'){
      setSubmitStatus(prevState => true); //set submit status to true from passed up state onClick
    }
  }

  const onSubmitUpdateHandler = (status) => {
    if(status === '200'){
      setSubmitStatus(prevState => false); //sets state back to false after update in Map component
    }
  }
  
  return (
    <div className="App">
      <Header />
      <AddPlayer onPlayerStatusChange={playerStatusChangeHandler} />
      <Players
        players={addedPlayer}
        onDeletedPlayerChange={deletedPlayerChangeHandler}
        onPlayerDataChange={playerDataChangeHandler}
        onPostcodeDataChange={postcodeDataChangeHandler}
        onSearchStatusChange={searchStatusChangeHandler}
      />
      <OutputOptions />
      <div style={{width: '75vw', height: '50vh'}}>
        <WrappedMap
 //found in outputs/Map file
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&`}//key=${process.env.REACT_APP_GOOGLE_MAP}`}
          loadingElement={<div style={{height: '100%'}}/>}
          containerElement={<div style={{height: '100%'}}/>}
          mapElement={<div style={{height: '100%'}}/>}
          players={addedPlayer}
          submitStatus={submitStatus}
          onSubmitUpdate={onSubmitUpdateHandler}
        />
      </div>
      
        
    </div>
  );
};

export default App;