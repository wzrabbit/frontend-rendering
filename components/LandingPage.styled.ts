import { styled, css } from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  flex-grow: 1;
`;

export const Main = styled.main`
  display: flex;
  justify-content: right;
  flex-direction: column;

  width: 750px;
  padding-right: 50px;

  & h2,
  & p {
    text-align: right;
  }
`;

export const SampleHeader = styled.header`
  height: 64px;
  padding: 8px;
`;

export const LandingPageLink = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const LoreTextContainer = styled.div`
  margin-bottom: 60px;
`;

export const GoogleLoginButtonAppearance = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 300px;
  height: 60px;

  border: 1px solid ${({ theme }) => theme.color.GRAY300};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.WHITE};

  box-shadow: 0 12px 20px ${({ theme }) => theme.color.GRAY300};
  transition: 0.25s;

  button &:hover {
    transform: translateY(-6px);
  }
`;

export const GoogleLogo = styled.img`
  width: 26px;
  height: 27px;
`;

export const mainPrefix = css`
  font-size: 60px;
  font-weight: 900;
  color: ${({ theme }) => theme.color.BLUE700};
`;

export const mainTitle = css`
  margin-bottom: 30px;

  font-size: 76px;
  font-weight: 900;
  color: ${({ theme }) => theme.color.PURPLE};
`;

export const mainLore = css`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.BLACK};
`;

export const googleLoginButton = css`
  display: flex;
  flex-direction: column;
  justify-content: end;

  width: 300px;
  height: 66px;
  margin-left: auto;
  padding: 0;

  cursor: not-allowed;
`;

export const googleLoginText = css`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.GRAY700};
`;
