import React from 'react';
import Button from './Button';

class ButtonLayoutContainer extends React.Component {
    render() {
        return (
            <div>
                {/* Number section */}
                <section>
                    <div>
                        <Button name="7" />
                        <Button name="8" />
                        <Button name="9" />
                    </div>
                    <div>
                        <Button name="4" />
                        <Button name="5" />
                        <Button name="6" />
                    </div>
                    <div>
                        <Button name="1" />
                        <Button name="2" />
                        <Button name="3" />
                    </div>
                    <div>
                        <Button name="AC" />
                        <Button name="0" />
                        <Button name="." />
                    </div>
                </section>
                {/* Operation section */}
                <section>
                    <div>
                        <Button name="+" />
                        <Button name="-" />
                        <Button name="=" />
                    </div>
                </section>
            </div>
        );
    }
}
export default ButtonLayoutContainer;