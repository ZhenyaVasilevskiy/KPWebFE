import MultipleSelectPlaceholder from "../common/MultipleSelect";
import stl from "./AssistantsSection.module.scss"
const AssistantsSection: React.FC = () => {
    return (
    <div className={stl.sectionWrapper}>
        <div className={stl.sectionContent}>
            <h2 className={stl.headline}>ASSISTANTS</h2>
        </div>
        <div className={stl.selects}>
            <MultipleSelectPlaceholder placeHolderName="Categories" listOfProperties={categories}></MultipleSelectPlaceholder>
            <MultipleSelectPlaceholder placeHolderName="High to Low" listOfProperties={filter}></MultipleSelectPlaceholder>
        </div>
       
    </div>)
}

export default AssistantsSection;

const categories = [
    'category1',
    'category2',
    'category3',
    'categoty4',
    'category1',
    'category2',
    'category3',
   ];
   
   const filter = [
    "highTOLOW",
    "lowToHigh",
    "highToHith",
    "Pizda",
    "Jopa",   
];
   