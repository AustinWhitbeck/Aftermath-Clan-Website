import TitleLayoutWrapper from "@/components/TitleLayoutWrapper"

const RecruitingLayout = ({ children }: { children: React.ReactNode}) => {
  return (
        <TitleLayoutWrapper titleText="Looking to join our roster?">
                {children}
        </TitleLayoutWrapper>
  )
}

export default RecruitingLayout