module.exports = 
{
    fingStatus: true,

    fingSwitch()
    {
        this.fingStatus = !this.fingStatus;
    },

    getFing()
    {
        return this.fingStatus;
    }
}