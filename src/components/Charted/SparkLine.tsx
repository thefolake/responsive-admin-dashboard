import {
    Inject,
    SparklineComponent,
    SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
type Props = {
    height: string;
    width: string;
    color: string;
    data: { x: number; yval: number }[];
    id: string;
    currentColor?: string;
};

const SparkLine = ({
                       id,
                       height,
                       width,
                       color,
                       data,
                       currentColor,
                   }: Props): JSX.Element => {
    return (
        <SparklineComponent
            id={id}
            height={height}
            width={width}
            lineWidth={1}
            valueType="Numeric"
            fill={color}
            // border={{ color: currentColor, width: 2 }}
            tooltipSettings={{
                visible: true,

                format: "${x} : data ${yval}",
                trackLineSettings: {
                    visible: true,
                },
            }}
            markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
            dataSource={data}
            xName="x"
            yName="yval"
            type="Line"
        >
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
    );
};

export default SparkLine;