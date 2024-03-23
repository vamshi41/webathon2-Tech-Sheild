import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './Home.css'

function Home() {
  const navigate=useNavigate()
  let pdf=()=>{
navigate('/Makepaper')
  }
  let payment=()=>{
    navigate('/Payments')
  }
  let exam=()=>{
    window.open('http://localhost:3000/', '_self')       
  }
  return (
    <div className="m-5 anni row row-cols-1 row-cols-sm-2 row-cols-md-2 mb-5">
      {/* Card 1 */}
      <div className="anni ">
        <button className='btn ' onClick={pdf}>
        <Card sx={{ maxWidth: 300, minHeight: 200 }} className='ido'>
          <CardContent className='ido'>
            <Typography gutterBottom variant="h5" component="div" className=''>
      MAKE A PAPER
            </Typography>
          </CardContent>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvaia-fmQlQM9ROUeL-e1MYUHEs57ZdZ69Cw&usqp=CAU" alt="" />
        </Card>
        </button>
      </div>
      <div className="anni" >
        <button className="btn">
        <Card sx={{ maxWidth: 300, minHeight: 200 }} className=''>
          <CardContent className='ido'>
            <Typography gutterBottom variant="h5" component="div">
           ANALYTICS
            </Typography>
          </CardContent>
          <img src="https://cdn.sanity.io/images/tlr8oxjg/production/86a0799384de64d2f1d1717a97018b6368029d45-1456x816.png?w=3840&q=80&fit=clip&auto=format" width="100%"alt="" />
        </Card>
        </button>
      </div>
      {/* Card 2 */}
      <div className="anni" onClick={exam}>
        <button className="btn">
        <Card sx={{ maxWidth: 300, minHeight: 200 }} className=''>
          <CardContent className='ido'>
            <Typography gutterBottom variant="h5" component="div">
              ATTEMPT PUBLIC TEST
            </Typography>
          </CardContent>
          <img src="https://img.freepik.com/free-vector/schoolboy-pass-exam-cartoon-banner-boy-solve-test_107791-7188.jpg" width="100%" alt="" />
        </Card>
        </button>
      </div>

      {/* Card 3 (on a new row for medium screens and above) */}
      <div className="anni">
        <button className="btn" onClick={payment}>
        <Card sx={{ maxWidth: 300, minHeight: 200 }} className=''>
          <CardContent className='ido'>
            <Typography gutterBottom variant="h5" component="div">
              ATTEMPT SUBSCRIPTION TEST
            </Typography>
          </CardContent>
          <img src="https://d1uavkppl1300i.cloudfront.net/images/online-entrance-exam.png" width="100%" alt="" />
        </Card>
        </button>
      </div>

      {/* Card 4 (on a new row for medium screens and above) */}
    
    </div>
  );
}
export default Home;
