import React, { useState } from 'react';
import { Head, Titulo, Options, ButtonSecondary, ButtonPrimary, Table, Td, Th, Tr, BoldTd, TipoIdTd, ColorTd, ColorTdRed, FilterContainer, Input, Select, Option, InputContainer, FilterDiv, ColorTdGreen, OptionsTd } from '../transactions/styles.js';
import Modal from '../modalTransactions/index.js';

import filterIcon from '../assets/icons/filter.svg';
import downloadIcon from '../assets/icons/download.svg';
import recebimentoIcon from '../assets/icons/recebimento.svg';
import transferenciaIcon from '../assets/icons/transferencia.svg';
import Circle from '../assets/icons/eclipse.svg';
import search from '../assets/icons/search.svg';
import tag from '../assets/icons/tag.svg';
import calendar from '../assets/icons/calendar.svg';
import card from '../assets/icons/card.svg'
import routing from '../assets/icons/routing.svg'
import chart from '../assets/icons/chart.svg'
import filterIconRed from '../assets/icons/filterIconRed.svg'
import moreIcon from '../assets/icons/add.svg'
import circleRed from '../assets/icons/circleRed.svg'
import trash from '../assets/icons/trash.svg'
import edit from '../assets/icons/edit.svg'



// Dados fictícios para a tabela
const data = [
    { tipoId: '001', tipoDespesa: 'Funcionário Gabriel', descricao: 'Pagamento salarial', data: '15/09/2024', valor: 'R$790,00', status: 'Ativo'},
    { tipoId: '002', tipoDespesa: 'Compras mercado', descricao: 'Compras para semana', data: '16/09/2024', valor: 'R$200,00', status: 'Inativo'},
    { tipoId: '003', tipoDespesa: 'Compras mercado', descricao: 'Compras para semana', data: '17/09/2024', valor: 'R$250,00', status: 'Inativo'},
    { tipoId: '004', tipoDespesa: 'Compras mercado', descricao: 'Compras para semana', data: '18/09/2024', valor: 'R$300,00', status: 'Inativo'},
    { tipoId: '005', tipoDespesa: 'Água e luz', descricao: 'Pagamento sabesp e enel', data: '19/09/2024', valor: 'R$350,00', status: 'Ativo'},
    { tipoId: '006', tipoDespesa: 'Compras mercado', descricao: 'Compras para semana', data: '20/09/2024', valor: 'R$400,00', status: 'Inativo'},
];

// Dados fictícios para os filtros
const tiposTransacao = ['Tipo 1', 'Tipo 2', 'Tipo 3'];
const formasPagamento = ['Cartão', 'Boleto', 'Pix'];
const distancias = ['Até 5 km', 'Até 10 km', 'Até 20 km'];
const statusPedidos = ['Pago', 'Pendente', 'Cancelado'];


function Expenses() {
    const [showFilter, setShowFilter] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const handleRowClick = (item) => {
        setSelectedData(item);
        setModalOpen(true);
    };

    return (
    <>
        <Head>
            <Titulo>
                <h1>Despesas</h1>
                <p>Confira todas as despesas cadastradas</p>
            </Titulo>
            <Options>
                <ButtonSecondary open={showFilter} onClick={() => setShowFilter(!showFilter)}>
                    {showFilter ? <img src={filterIconRed} /> : <img src={filterIcon} />}
                    <p>Filtrar</p>
                </ButtonSecondary>
                <ButtonSecondary>
                    <img src={moreIcon} />
                    <p>Adicionar despesa</p>
                </ButtonSecondary>
                <ButtonPrimary>
                    <p>Exportar</p>
                    <img src={downloadIcon} alt="icone de filtro" />
                </ButtonPrimary>
            </Options>
        </Head>

                <FilterContainer show={showFilter}>
                    <FilterDiv>
                        <InputContainer>
                            <img src={search} />
                            <Input type="text" placeholder="Digite sua busca aqui..." />
                        </InputContainer>

                        <InputContainer>
                            <img src={tag} />
                            <Select>
                            <Option value="" disabled selected>Tipo de transação</Option>
                            {tiposTransacao.map((tipo, index) => (
                                <Option key={index} value={tipo}>{tipo}</Option>
                            ))}
                            </Select>
                        </InputContainer>
                    </FilterDiv>

                    <FilterDiv>
                        <InputContainer>
                            <img src={calendar} />
                            <Select>
                            <Option value="" disabled selected>Data</Option>
                            {/* Para o seletor de datas, você pode usar uma biblioteca como react-datepicker */}
                            <Option value="2024-09-15">2024-09-15</Option>
                            <Option value="2024-09-16">2024-09-16</Option>
                            </Select>
                        </InputContainer>

                        <InputContainer>
                            <img src={card} />
                            <Select>
                            <Option value="" disabled selected>Forma de pagamento</Option>
                            {formasPagamento.map((forma, index) => (
                                <Option key={index} value={forma}>{forma}</Option>
                            ))}
                            </Select>
                        </InputContainer>

                        <InputContainer>
                            <img src={routing} />
                            <Select>
                            <Option value="" disabled selected>Distância</Option>
                            {distancias.map((distancia, index) => (
                                <Option key={index} value={distancia}>{distancia}</Option>
                            ))}
                            </Select>
                        </InputContainer>

                        <InputContainer>
                            <img src={chart} />
                            <Select>
                            <Option value="" disabled selected>Status do pedido</Option>
                            {statusPedidos.map((status, index) => (
                                <Option key={index} value={status}>{status}</Option>
                            ))}
                            </Select>
                        </InputContainer>
                        </FilterDiv>
                </FilterContainer>

        <Table>
            <thead>
                <Tr>
                <Th>ID</Th>
                <Th>Título da despesa</Th>
                <Th>Descrição</Th>
                <Th>Data</Th>
                <Th>Valor</Th>
                <Th>Recorrência</Th>
                <Th>Ações</Th>
                </Tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                <Tr key={index} onClick={() => handleRowClick(item)}>
                <TipoIdTd>#{item.tipoId}</TipoIdTd>
                <Td>{item.tipoDespesa}</Td>
                <Td>{item.descricao}</Td>
                <Td>{item.data}</Td>
                <BoldTd>-{item.valor}</BoldTd>
                <ColorTd>
                    {item.status === 'Ativo' ? (
                    <>
                        <img src={Circle} />
                        <ColorTdGreen>{item.status}</ColorTdGreen>
                    </>
                    ) : (
                    <>
                        <img src={circleRed} />
                        <ColorTdRed>{item.status}</ColorTdRed>
                    </>
                    )}
                </ColorTd>
                <Td>
                    <button>
                        <img src={edit} />
                    </button>
                    <button>
                        <img src={trash} />
                    </button>
                </Td>
            </Tr>
        ))}
        </tbody>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} data={selectedData} />
    </Table>
    </>
);
}

export default Expenses;
