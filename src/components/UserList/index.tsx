import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Daniel Leme" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Adriano"  isBot/>
      <UserRow nickname="Alan" />
      <UserRow nickname="Ari" />
      <UserRow nickname="Beatriz" />
      <UserRow nickname="Beto" />
      <UserRow nickname="Bia Silva" />
      <UserRow nickname="Dayane" />
      <UserRow nickname="Enzo" />
      <UserRow nickname="Evelin" />
      <UserRow nickname="Feb" />
      <UserRow nickname="Gabriel" />
      <UserRow nickname="Isabel" />
      <UserRow nickname="Juan" />
      <UserRow nickname="Lana" />
      <UserRow nickname="Marcos" />
      <UserRow nickname="Maria Eduarda" />
      <UserRow nickname="Music" isBot />
      <UserRow nickname="Paulo" />
    </Container>
  );
};

export default UserList;