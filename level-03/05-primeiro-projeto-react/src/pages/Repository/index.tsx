import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api  from '../../services/api';

import logoImg from '../../assets/logo.svg'

import { Header, RepositoryInfo, Issues } from './styles'
interface RepositoryParams{
    repository: string;
}

const Repository: React.FC = () => {
    const{ params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        
    }, []);

    return(
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer"/>
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src={logoImg} alt="Descricao" />
                    <div>
                        <strong>repositorio/nome</strong>
                        <p>descricao repo</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1800</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>1800</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>1800</strong>
                        <span>Issues</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="asasd">
                    <div>
                        <strong>full_name</strong>
                        <p>description</p>
                    </div>

                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    )
}

export default Repository;