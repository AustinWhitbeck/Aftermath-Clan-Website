import TitleLayoutWrapper from "@/components/TitleLayoutWrapper"

const RosterLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <TitleLayoutWrapper titleText="Aftermath Roster">
        {children}
    </TitleLayoutWrapper>
  )
}

export default RosterLayout