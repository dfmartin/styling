import colors from '../../../stylesheets/base/variables.module.scss';

const colorVariable = (color: string) => {
    const array = color.split(/(?=[A-Z])/);
    return array.join('-').toLowerCase();
};

const getColors = () => <div>
    {Object.keys(colors).map(cat => (
        <div>
            <h1>{cat}</h1>
            <div style={{ display: 'grid', gridTemplateColumns:'repeat(auto-fill, min-max(120px, 175px))', gap: '20px'}}>
                {Object.keys(colors[cat]).map(color => {
                    const c: any = colors[cat];
                    return (
                    <div style={{ backgroundColor: `${c.color}`}} />
                )})}
            </div>
        </div>
        ))}
    </div>


export const FullColors = getColors;
export default FullColors;