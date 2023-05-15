import './App.css';
const Video = () => {
    return (
      <video controls className='video'>
        <source src="./videos/RHEL-provisioning.mp4" type="video/mp4"/>
        Sorry, your browser doesn't support videos.
      </video> 
    );
  };
  
  export default Video; 

