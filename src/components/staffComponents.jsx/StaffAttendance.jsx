// import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios'; // Add axios for HTTP requests

// function StaffAttendance() {
//   const [image, setImage] = useState(null);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const streamRef = useRef(null);

//   useEffect(() => {
//     startCamera();

//     return () => {
//       stopCamera();
//     };
//   }, []);

//   const startCamera = () => {
//     navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
//       streamRef.current = stream;
//       videoRef.current.srcObject = stream;
//       videoRef.current.play();
//     });
//   };

//   const stopCamera = () => {
//     if (streamRef.current) {
//       const tracks = streamRef.current.getTracks();
//       tracks.forEach((track) => track.stop());
//       streamRef.current = null;
//     }
//   };

//   const captureImage = () => {
//     const context = canvasRef.current.getContext('2d');
//     context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
//     setImage(canvasRef.current.toDataURL('image/png'));
//     stopCamera();
//   };

//   const saveImage = () => {
//     if (!image) return;
//     axios.post('http://localhost:3000/staff/staffAttendance', { img:image },
//       {withCredentials:true}
//     )
//       .then(response => {
//         console.log('Image saved successfully', response.data);
//       })
//       .catch(error => {
//         console.error('Error saving image', error);
//       });
//   };

//   const retakeImage = () => {
//     setImage(null);
//     startCamera();
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-2xl font-bold mb-4">Staff Attendance</h1>
//       {image ? (
//         <>
//           <img src={image} alt="Captured" className="mb-4" />
//           <button
//             onClick={retakeImage}
//             className="bg-blue-500 text-white px-4 py-2 rounded mb-2 hover:bg-blue-700"
//           >
//             Retake
//           </button>
//           <button
//             onClick={saveImage}
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
//           >
//             Save
//           </button>
//         </>
//       ) : (
//         <>
//           <video ref={videoRef} className="mb-4" width="640" height="480"></video>
//           <canvas ref={canvasRef} className="hidden" width="640" height="480"></canvas>
//           <button
//             onClick={captureImage}
//             className="bg-blue-500 text-white px-4 py-2 rounded mb-2 hover:bg-blue-700"
//           >
//             Capture
//           </button>
//         </>
//       )}
//     </div>
//   );
// }
// export default StaffAttendance;



import React, { useState, useRef, useEffect, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Context, server } from '../../Middle';
import { Navigate } from 'react-router-dom';

function StaffAttendance() {
  const [image, setImage] = useState(null);
  const {staffLogged}=useContext(Context)
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      streamRef.current = stream;
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    });
  };

  const stopCamera = () => {
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks();
      tracks.forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  const captureImage = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    setImage(canvasRef.current.toDataURL('image/png'));
    stopCamera();
  };

  const saveImage = () => {
    if (!image) return;
    axios.post(`${server}/staff/staffAttendance`, { img: image }, { withCredentials: true })
      .then(response => {
        console.log('Image saved successfully', response.data);
        toast.success("Attendance taken successfully")
      })
      .catch(error => {
        // console.error('Error saving image', error);
        toast.error("Oops,try again")
      });
  };

  const retakeImage = () => {
    setImage(null);
    startCamera();
  };
  useEffect(()=>{},[staffLogged])
  return (!staffLogged)? <Navigate to="/"></Navigate>:(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-8 ">Staff Attendance</h1>
      {image ? (
        <div className="flex flex-col items-center justify-center">
          <img src={image} alt="Captured" className="rounded-lg shadow-lg mb-4" />
          <div className="space-x-4">
            <button
              onClick={retakeImage}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Retake
            </button>
            <button
              onClick={saveImage}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <video ref={videoRef} className="rounded-lg shadow-lg mb-4" width="640" height="480" autoPlay></video>
          <canvas ref={canvasRef} className="hidden" width="640" height="480"></canvas>
          <button
            onClick={captureImage}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Capture
          </button>
        </div>
      )}
    </div>
  );
}

export default StaffAttendance;
