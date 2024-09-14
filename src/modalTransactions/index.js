import React from 'react';
import { ModalOverlay, ModalContent, CloseButton } from './styles';

function Modal({ isOpen, onClose, data }) {
    if (!isOpen) return null;

    return (
        <ModalOverlay>
        <ModalContent>
            <CloseButton onClick={onClose}>Fechar</CloseButton>
            <h2>Detalhes da Transação</h2>
            {data ? (
            <div>
                <p><strong>Tipo e ID:</strong> {data.tipo} {data.id}</p>
                <p><strong>Nome do Cliente:</strong> {data.nomeCliente}</p>
                <p><strong>Pagamento:</strong> {data.pagamento}</p>
                <p><strong>Data do Pedido:</strong> {data.dataPedido}</p>
                <p><strong>Valor:</strong> {data.valor}</p>
                <p><strong>Status:</strong> {data.status}</p>
            </div>
            ) : (
                <p>Nenhum detalhe disponível.</p>
        )}
        </ModalContent>
    </ModalOverlay>
    );
}

export default Modal;