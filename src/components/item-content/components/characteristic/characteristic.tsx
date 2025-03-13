

type characteristicProps = {
    characteristic: string;
    characteristicUnknown: string;
    name: string;
  };



export const Characteristic: React.FC<characteristicProps> = ({ characteristic, characteristicUnknown, name }) => {

  return (
    <div className="flex items-baseline">
            <span className="text-14 flex-1 pb-1">
              <span style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ flex: 6,}}>{name}:</span>
                <span style={{ flex: 10, borderBottom: '1px dotted ', height: '1px', marginBottom: '-1px' }}></span>
                <span style={{ flex: 40,}} className='text-blue-600'>{characteristic || characteristicUnknown}</span>
              </span>
            </span>
          </div>
  );
};