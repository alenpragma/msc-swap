import { icons } from 'context/allAsset'
import { useState } from 'react'
import { ArrowRight } from 'react-feather'
import styled from 'styled-components'

const CryptoTicker = () => {
  const [prices] = useState([
    { symbol: 'MIND', price: 0.082, change: 6.51, icon: `${icons.icon1}` },
    { symbol: 'WBNB', price: 650.983, change: -0.77, icon: `${icons.icon2}` },
    { symbol: 'ETH', price: 3701.322, change: 3.93, icon: `${icons.icon3}` },
    { symbol: 'BFG', price: 0.024, change: -0.64, icon: `${icons.icon4}` },
    { symbol: 'DOT', price: 8.812, change: 23.03, icon: `${icons.icon5}` },
  ])

  return (
    <TickerWrapper>
      <TickerContainer>
        <PriceList>
          {prices.map((crypto) => (
            <PriceItem key={crypto.symbol}>
              <CryptoIcon src={crypto.icon} alt={crypto.symbol} />
              <PriceInfo>
                <SymbolChange>
                  <Symbol>{crypto.symbol}</Symbol>
                  <Change positive={crypto.change >= 0}>
                    {crypto.change >= 0 ? '+' : ''}
                    {crypto.change}%
                  </Change>
                </SymbolChange>
                <Price>
                  $
                  {crypto.price < 1
                    ? crypto.price.toFixed(3)
                    : crypto.price.toLocaleString(undefined, {
                      minimumFractionDigits: 3,
                      maximumFractionDigits: 3,
                    })}
                </Price>
              </PriceInfo>
            </PriceItem>
          ))}
        </PriceList>

        <AllMarkets href="#">
          All Markets <ArrowRight size={16} />
        </AllMarkets>
      </TickerContainer>
    </TickerWrapper>
  )
}

export default CryptoTicker

// Styled Components
const TickerWrapper = styled.div`
  padding: 2rem 1rem;
  background: #131318;
`

const TickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  overflow-x: hidden;
`

const PriceList = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`

const PriceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: max-content;
`

const CryptoIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`

const PriceInfo = styled.div``

const SymbolChange = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Symbol = styled.span`
  color: #6188ff;
  font-weight: 500;
`

const Change = styled.span<{ positive: boolean }>`
  font-size: 0.875rem;
  color: ${({ positive }) => (positive ? '#22c55e' : '#f87171')};
`

const Price = styled.p`
  color: white;
  font-weight: 500;
`

const AllMarkets = styled.a`
  color: white;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: 1rem;
  white-space: nowrap;
  text-decoration: none;
`
