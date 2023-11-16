export default function Tabs({children, buttons, buttonsContainer = 'menu'})
// {
//     const ButtonContainer = buttonsContainer
//     return( <>
//     <ButtonContainer>
//        {buttons}
//     </ButtonContainer>
//     {children}
//     </>
//     );
// } or in order to get default value

{
    const ButtonContainer = buttonsContainer
    return( <>
    <ButtonContainer>
       {buttons}
    </ButtonContainer>
    {children}
    </>
    );
}