import React, { useState } from 'react';
import { Head, Titulo, Options, ButtonSecondary, ButtonPrimary, Table, Td, Th, Tr, BoldTd, TipoIdTd, ColorTd, FilterContainer, Input, Select, Option, InputContainer, FilterDiv } from './styles';
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


// Dados fictícios para a tabela
const data = [
    { tipoId: '001', nome: 'João Silva', pagamento: 'Cartão', data: '15/09/2024', valor: 'R$150,00', status: 'Concluído', tipo: 'transferencia' },
    { tipoId: '002', nome: 'Maria Oliveira', pagamento: 'Boleto', data: '16/09/2024', valor: 'R$200,00', status: 'Concluído', tipo: 'pedido' },
    { tipoId: '003', nome: 'Carlos Souza', pagamento: 'Pix', data: '17/09/2024', valor: 'R$250,00', status: 'Concluído', tipo: 'pedido' },
    { tipoId: '004', nome: 'Ana Lima', pagamento: 'Cartão', data: '18/09/2024', valor: 'R$300,00', status: 'Concluído', tipo: 'pedido' },
    { tipoId: '005', nome: 'Fernanda Costa', pagamento: 'Boleto', data: '19/09/2024', valor: 'R$350,00', status: 'Concluído', tipo: 'transferencia' },
    { tipoId: '006', nome: 'Pedro Santos', pagamento: 'Pix', data: '20/09/2024', valor: 'R$400,00', status: 'Concluído', tipo: 'pedido' },
];

// Dados fictícios para os filtros
const tiposTransacao = ['Tipo 1', 'Tipo 2', 'Tipo 3'];
const formasPagamento = ['Cartão', 'Boleto', 'Pix'];
const distancias = ['Até 5 km', 'Até 10 km', 'Até 20 km'];
const statusPedidos = ['Pago', 'Pendente', 'Cancelado'];


function Transactions() {
    const [showFilter, setShowFilter] = useState(false);

    return (
    <>
        <Head>
            <Titulo>
                <h1>Transações</h1>
                <p>Confira todas as transações da conta</p>
            </Titulo>
            <Options>
                <ButtonSecondary open={showFilter} onClick={() => setShowFilter(!showFilter)}>
                    {showFilter ? <img src={filterIconRed} /> : <img src={filterIcon} />}
                    <p>Filtrar</p>
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
                <Th>Tipo e ID</Th>
                <Th>Nome do cliente</Th>
                <Th>Pagamento</Th>
                <Th>Data do pedido</Th>
                <Th>Valor</Th>
                <Th>Status</Th>
                </Tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                <Tr key={index}>
                <TipoIdTd>
                    {item.tipo === 'transferencia' ? (
                    <>
                        <img src={transferenciaIcon} />
                        Transferência #{item.tipoId}
                    </>
                ) : (
                    <>
                        <img src={recebimentoIcon} />
                        Pedido #{item.tipoId}
                    </>
                )}
                </TipoIdTd>
                <Td>{item.nome}</Td>
                <Td>{item.pagamento}</Td>
                <Td>{item.data}</Td>
                <BoldTd>{item.tipo === 'transferencia' ? (
                    <>
                    -{item.valor}
                    </>
                    ) : (
                    <>
                    {item.valor}
                    </>)}</BoldTd>
                <ColorTd>
                    <img src={Circle} />
                    {item.status}
                </ColorTd>
            </Tr>
        ))}
        </tbody>
    </Table>
    </>
);
}

export default Transactions;
