import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &:hover {
            .incomeImg{
                animation: nudgeincome 2s infinite;
            }

            @keyframes nudgeincome { 
                0% {
                    transform: translateY(0);
                }               
                50% {
                    transform: translateY(-1rem);
                }
                
                100% {
                    transform: translateY(-1rem);
                }
            }

            .outcomeImg{
                animation: nudgeoutcome 2s infinite;
            }

            @keyframes nudgeoutcome { 
                0% {
                    transform: translateY(0);
                }               
                50% {
                    transform: translateY(1rem);
                }
                
                100% {
                    transform: translateY(1rem);
                }
            }

            .totalImg{
                animation: nudgetotal 2s infinite;
            }

            @keyframes nudgetotal { 
                0% {
                    transform: rotate(0);
                }               
                100% {
                    transform: rotate(360deg);
                }

            }
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--green);
            color: #FFF;
        }
    }
`;