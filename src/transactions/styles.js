import styled from 'styled-components';
import { GlobalStyles, cores } from '../globalStyles.js';

export const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Titulo = styled.div`
  h1{
    color: ${cores.secondaryGray800};
    margin-bottom: -4px;
  }
  
  p{
    color: ${cores.secondaryGray800};
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonPrimary = styled.button`
  border: 1px solid ${cores.primaryRed};
  border-radius: 6px;
  background-color: ${cores.primaryRed};
  color: ${cores.white};
  width: 8rem;
  height: 3rem;
  display: flex;
  align-items: center;

  p {
    font-size: 0.9rem;
  }
`;

export const ButtonSecondary = styled.button`
  border: 1px solid ${props => (props.open ? `${cores.primaryRed}` : `${cores.secondaryGray100}`)};
  border-radius: 6px;
  background-color: ${cores.white};
  color: ${props => (props.open ? `${cores.primaryRed}` : `${cores.secondaryGray400}`)};
  width: 8rem;
  height: 3rem;
  padding-left: 16px;
  display: flex;
  align-items: center;

  p {
    font-size: 0.9rem;
  }
`;

export const Table = styled.table`
  width: 98%;
  border: 1px solid ${cores.secondaryGray100};
  border-radius: 0.8rem;
  margin: 25px 20px;
  font-size: 16px;
  text-align: left;
`;

export const Th = styled.th`
  padding: 10px;
`;

export const Td = styled.td`
  padding: 10px;
`;

export const BoldTd = styled(Td)`
  font-weight: bold;
`;

export const ColorTd = styled(Td)`
  color: ${cores.green500}
`;

export const TipoIdTd = styled(Td)`
  display: flex;
  align-items: center;
`;

export const Tr = styled.tr`
`;

export const FilterContainer = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 10px 10px 40px; /* Espaço para o ícone */
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;

  &::placeholder {
    color: ${cores.secondaryGray400}
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 10px 10px 40px; /* Espaço para o ícone */
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: ${cores.secondaryGray400};
  box-sizing: border-box;
`;

export const Option = styled.option`
  padding: 10px;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;

  img {
    position: absolute;
    top: 40%;
    left: 10px; /* Ajuste conforme necessário */
    transform: translateY(-50%);
    color: #aaa; /* Cor do ícone */
    width: 2.2rem;
  }
`;

export const FilterDiv = styled.div`
  display: flex;
  margin-bottom: -16px;
`;