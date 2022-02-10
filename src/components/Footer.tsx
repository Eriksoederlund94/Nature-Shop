import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

function Footer() {
  const { pathname } = useLocation();

  return <TestWrapper pathname={pathname}></TestWrapper>;
}

const TestWrapper = styled.div<{ pathname: string }>`
  height: 10vh;
  width: 100%;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='3000' height='192' preserveAspectRatio='none' viewBox='0 0 3000 192'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1061%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c37 C 100%2c31.4 300%2c6.8 500%2c9 C 700%2c11.2 800%2c49.4 1000%2c48 C 1200%2c46.6 1300%2c-0.8 1500%2c2 C 1700%2c4.8 1800%2c57.2 2000%2c62 C 2200%2c66.8 2300%2c31.6 2500%2c26 C 2700%2c20.4 2900%2c32.4 3000%2c34L3000 192L0 192z' fill='rgba(34%2c 73%2c 87%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c94 C 75%2c97.4 225%2c116.4 375%2c111 C 525%2c105.6 600%2c66.8 750%2c67 C 900%2c67.2 975%2c110.6 1125%2c112 C 1275%2c113.4 1350%2c73.2 1500%2c74 C 1650%2c74.8 1725%2c113.4 1875%2c116 C 2025%2c118.6 2100%2c88.4 2250%2c87 C 2400%2c85.6 2475%2c109.6 2625%2c109 C 2775%2c108.4 2925%2c89 3000%2c84L3000 192L0 192z' fill='rgba(32%2c 223%2c 127%2c 0.28)'%3e%3c/path%3e%3cpath d='M 0%2c157 C 33.4%2c161.6 100.2%2c180.8 167%2c180 C 233.8%2c179.2 267.2%2c153.2 334%2c153 C 400.8%2c152.8 434.2%2c182.6 501%2c179 C 567.8%2c175.4 601.2%2c136.6 668%2c135 C 734.8%2c133.4 768.2%2c172.2 835%2c171 C 901.8%2c169.8 935.2%2c130.4 1002%2c129 C 1068.8%2c127.6 1102.2%2c164.2 1169%2c164 C 1235.8%2c163.8 1269.2%2c125 1336%2c128 C 1402.8%2c131 1436.2%2c176.2 1503%2c179 C 1569.8%2c181.8 1603.2%2c145 1670%2c142 C 1736.8%2c139 1770.2%2c161.4 1837%2c164 C 1903.8%2c166.6 1937.2%2c150.4 2004%2c155 C 2070.8%2c159.6 2104.2%2c190.8 2171%2c187 C 2237.8%2c183.2 2271.2%2c138.2 2338%2c136 C 2404.8%2c133.8 2438.2%2c177.4 2505%2c176 C 2571.8%2c174.6 2605.2%2c128.6 2672%2c129 C 2738.8%2c129.4 2773.4%2c176.4 2839%2c178 C 2904.6%2c179.6 2967.8%2c145.2 3000%2c137L3000 192L0 192z' fill='rgba(32%2c 223%2c 127%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1061'%3e%3crect width='3000' height='192' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-color: #fff;
  ${(props) => {
    if (props.pathname === '/')
      return `
            background-color: #093545;
        `;
  }}
`;

export default Footer;
