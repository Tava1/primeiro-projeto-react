import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="tyest">
        <img
          src="https://avatars1.githubusercontent.com/u/42683835?s=460&u=52d001c88660139191a24b618bdcb96ae0806c39&v=4"
          alt="Gustavo Santos"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="tyest">
        <img
          src="https://avatars1.githubusercontent.com/u/42683835?s=460&u=52d001c88660139191a24b618bdcb96ae0806c39&v=4"
          alt="Gustavo Santos"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="tyest">
        <img
          src="https://avatars1.githubusercontent.com/u/42683835?s=460&u=52d001c88660139191a24b618bdcb96ae0806c39&v=4"
          alt="Gustavo Santos"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>

    </Repositories>
  </>
);

export default Dashboard;
