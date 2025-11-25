// import { SunMedium } from 'lucide-react'
import { SunMedium } from 'lucide-react'
import { Facebook, Twitter, Youtube } from 'react-feather'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import sLogo from '../../assets/MIND-01-01.png'

const Footer = () => {
  const tokenMetrics = [
    { id: 1, label: 'Max Supply', value: '710 000 000' },
    { id: 2, label: 'Total supply', value: '71,000,000' },
    { id: 3, label: 'Circulating supply:', value: '519 051 439' },
    { id: 4, label: 'Total Burned:', value: '44 507 511' },
    { id: 5, label: 'Market Cap:', value: '$43 171 732' },
  ]

  const footerLinks = [
    {
      id: 1,
      title: 'About Us',
      data: [
        { id: 1, label: 'Terms of Use', path: '/terms' },
        { id: 2, label: 'Privacy Policy', path: '/privacy' },
        { id: 3, label: 'Blog', path: 'https://academy.mindchain.info/' },
      ],
    },
    {
      id: 2,
      title: 'Features',
      data: [
        { id: 1, label: 'Exchange', path: '/exchange' },
        { id: 2, label: 'Liquidity', path: '/liquidity' },
        { id: 3, label: 'Farms', path: '/farms' },
        { id: 4, label: 'Launchpools', path: '/launchpools' },
        { id: 5, label: 'Fixed Staking', path: '/staking' },
      ],
    },
    {
      id: 3,
      title: 'Service',
      data: [
        { id: 1, label: 'Referral Program', path: '/referral' },
        { id: 2, label: 'MIND Token', path: '/mind-token' },
        { id: 3, label: 'Apply to Launch', path: '/apply' },
        { id: 4, label: 'CEX', path: 'https://mindchain.info' },
        { id: 5, label: 'DeFi', path: 'https://www.mindchainwallet.com/' },
      ],
    },
  ]

  const socialIcons = [
    // {
    //   id: 1,
    //   name: 'Telegram',
    //   icon: <Facebook />,
    //   path: 'https://t.me/MindchainEcosystem',
    // },
    {
      id: 2,
      name: 'Facebook',
      icon: <Facebook />,
      path: 'https://www.facebook.com/mindchain.info',
    },
    { id: 3, name: 'Twitter', icon: <Twitter />, path: 'https://x.com/MindChain1' },
    {
      id: 4,
      name: 'Medium',
      icon: <SunMedium />,
      path: 'https://medium.com/@mindchain',
    },
    {
      id: 5,
      name: 'YouTube',
      icon: <Youtube />,
      path: 'https://www.youtube.com/@MINDCHAIN',
    },
  ]

  return (
    <FooterWrapper>
      <FooterInner>
        {/* Token Info Card */}

        <TokenCard>
          <TokenHeader>
            <TokenInfo>
              <Logo src={sLogo} alt="MIND" />
              <div>
                <TokenName>MIND</TokenName>
                <TokenPrice>0.083</TokenPrice>
              </div>
            </TokenInfo>
            <TokenMetrics>
              {tokenMetrics.map((metric, index) => (
                <Metric key={metric.id}>
                  <MetricLabel>{metric.label}</MetricLabel>
                  <MetricValue>{metric.value}</MetricValue>
                </Metric>
              ))}
            </TokenMetrics>
          </TokenHeader>
          <TokenActions>
            <WalletIcon src="https://static.biswap.org/bs/icons/metamask-transparent.svg" alt="Metamask" />
            <BuyButton>Buy MIND</BuyButton>
          </TokenActions>
        </TokenCard>

        {/* Footer Links */}
        <LinksWrapper>
          {footerLinks.map((section) => (
            <LinkSection key={section.id}>
              <SectionTitle>{section.title}</SectionTitle>
              <LinkList>
                {section.data.map((link) => (
                  <StyledLink key={link.id} to={link.path}>
                    {link.label}
                  </StyledLink>
                ))}
              </LinkList>
            </LinkSection>
          ))}
        </LinksWrapper>

        {/* Community & Social */}
        <CommunitySection>
          <CommunityTitle>Community</CommunityTitle>
          <SocialGrid>
            {socialIcons.map((social) => (
              <SocialLink key={social.id} href={social.path} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </SocialLink>
            ))}
          </SocialGrid>
          <CertikBox>
            <img src="https://static.biswap.org/bs/icons/CertikAudited.svg" alt="Audited by Certik" />
          </CertikBox>
        </CommunitySection>
      </FooterInner>
    </FooterWrapper>
  )
}

export default Footer

/* ---------------- Styled Components ---------------- */
const FooterWrapper = styled.footer`
  background: #1f2029;
  border-top: 1px solid #000;
  color: white;
  padding: 4rem 1rem;
`

const FooterInner = styled.div`
  max-width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`

/* Token Card */
const TokenCard = styled.div`
  background: #1f2029;
  box-shadow: 0 2px 10px rgba(14, 13, 13, 0.4);
  padding: 1.5rem;
  border-radius: 0.2rem;
  flex: 1;
  width: 100%;

  @media (min-width: 640px) {
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 38%;
  }
`

const TokenHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const TokenInfo = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

const Logo = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`

const TokenName = styled.div`
  color: #9ca3af;
`

const TokenPrice = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
`

const TokenMetrics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Metric = styled.div`
  display: flex;
  justify-content: space-between;
`

const MetricLabel = styled.span`
  color: #facc15;
  font-size: 0.75rem;
`

const MetricValue = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
`

const TokenActions = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`

const WalletIcon = styled.img`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: #101010ff;
`

const BuyButton = styled.a`
  background: #101010ff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: inline-flex; /* flexbox enable */
  justify-content: center; /* horizontal center */
  align-items: center; /* vertical center */
  color: #fff; /* text visible */
  text-decoration: none;
`

/* Footer Links */
const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
  max-width: 40%;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const LinkSection = styled.div``

const SectionTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #facc15;
`

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const StyledLink = styled(Link)`
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #facc15;
  }
`

/* Community Section */
const CommunitySection = styled.div`
  flex: 1;
`

const CommunityTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #facc15;
`

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #facc15;
  }
`

const CertikBox = styled.div`
  margin-top: 1.5rem;
  width: 120px;
  background: rgba(0, 0, 0, 0.15);
  padding: 0.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
`
