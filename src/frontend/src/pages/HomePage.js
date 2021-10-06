import { React, useEffect, useState } from 'react';
import { TeamTile } from '../components/TeamTile';
import {useParams} from 'react-router-dom';
import './HomePage.scss';

export const HomePage = () => {
  const [teams, setTeams] = useState([]);
  const { teamName } = useParams();

  useEffect(
    () => {
      const fetchTeams = async () => {
        const response = await fetch(`http://localhost:8080/team`);
        const data = await response.json();
        setTeams(data);
      };
      fetchTeams();
    },
    []
  );

  return (
    <div className="HomePage">
      <div className="header-section">
        <h1 className="app-name">IPL Dashboard</h1>
      </div>
      <div className="team-grid">
        {teams.map(team => <TeamTile teamName={team.teamName}></TeamTile>)}
      </div>
    </div>
    
  )
}
