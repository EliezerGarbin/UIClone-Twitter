import React from 'react';

import { 
  Container, 
  Banner, 
  Avatar,
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return(
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        
        <h1>ELiezer G.</h1>
        <h2>@EliezerGarbin</h2>

        <p>
          Software Engineering Jr
        </p>

        <ul>
          <li>
            <LocationIcon />
              Tupã, São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 13 de novembro de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>75</strong>
          </span>
          <span>
            <strong>56 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;