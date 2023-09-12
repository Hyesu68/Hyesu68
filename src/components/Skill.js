const Skill = () => {
  return (
    <div className="skill">
      <h1 className="skill_heading">Skills</h1>
      <div className="skill_content">
        <h2 className="skill_title">Language</h2>
        <span className="skill_container">
          <img
            className="skill_image"
            src="https://icon-library.com/images/java-icon-images/java-icon-images-6.jpg"
          />
          <img
            className="skill_image"
            src="https://ncube-digest.com/wp-content/uploads/2022/11/Kotlin-mobile-app-development.jpg"
          />
          <img
            className="skill_image"
            src="https://www.computerhope.com/jargon/j/javascript.png"
          />
          <img
            className="skill_image"
            src="data:image/png;base64,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"
          />
          <img
            className="skill_image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA81BMVEX///8mTeQpZfHr6+sAAAAeSeRcdekoWevt7evx8OsUROT39/cWXfD08+sAPeSap+enu/iNnOdJZOU+Pj7X2eqmpqYjYvEAV/B0dHSZsfdubm6dnZ1PevJHR0dTU1Pp7f3IyMhOauVhYWENQeMnVOi1tbUAOeIAVfC7xPXd4vr2+P7Dy/YxMTFlfOqqtfLQ1vh6jObW3PmxuuiZp/Ctra0ANOKyvfRuguaElu7Fyumfq+g4WeWPneeHovYtafGPqPbe4OrW1taNjY1ZWVmAgIBiifRCdfJeduVxkvVdhPN2lvVLevPa3OrKz+qqs+iBkue6welbbYnzAAAK9UlEQVR4nO2dfV/aSBeG4/oEJAuxuhbr1l2WDUXFqijrS0Wt+1bte7//p3kSEUnIOccccs+Qurn/pSVcvxkml2fOBMeB5MX/6DyPXvx5lhdfYj4YLCVhSVgSzj8lYUn4ZAhf/xLLT6+kF/+YL1AqHOHdSEwgfkv/z8mLryx/Zl0mhH/8mEj04gTixfNYXv756IsFygtpJJ7Y97AkLAlLwnmlJPwvE/7+FAj/+jWWv18nCbkXi0v4y++x/E3xJgmT+ec7ICQm4quXsTz/NduL3xUh91X7Tr+HBMQTW0tLwpKwJJxXnj6h+DmfBOGfv9FZjF785/VPVF6/kl4sWq2tTJkyZcqUKVOmTJky+dJqV4qcdis3Ye/YLXKOe/kH0Vsocrz8gM7QnTeFEHcIIGwXmrANINwrNOEegLBfaMI+gHBQ5KXGGwAI94N5YwgJ9gGE24Um3AYQHvjzxhDiHwAIdwpNuAMgbBWaML+WhsF+DzvVnOnE3y1AADrY+2H1h5ypxt/NhRBixRRKCNFSx6kUizA+S90bCCFW27CECGlznEuotkEJvRUI4Tl0Mc1NGH8ziLShtQ1LiJA2tLZBCSHShtY2LCFC2kJt6xaJsBl/sy6g0hamV6i1NEHoYQidDvKGmJcwoTQdDKCzWljCVRAhVNughBUQ4WmRCBPSdgoihGobkhAkbY6zXCTC+Ht55yDCE6S2IQmDExDhLk/oetps1bVpsoQgaZO0zT1d1mb/mTb/NllCjLRJ1TZv0Kgpo7/8ZZwwKW2QSluYHiumbr+2qMyP6sv/yxOCAB2HJ9xrmCd8FydMVNp8GCErpu6qBcLE1zChNFUYobANbIFwiyVEbACPwmtb1zxhL0FoRNoc54yVGv96yTRha50j9M5ghPw2sL9mnPAwQRi/OGQDeBRe24I3xgl368alTdK24Eh7Q1QTPuMJd2GEh7zUnBsn3GAJ/UMYIV9t8y6ME17GCc1IW7hgs7NUr21qQl7aAlClLSLkABfcG+0NUU24GSesJ64OAxQ2SfXapia84rQUtD06CltPdIfG7xbxdcaUtEnde+6iElFL2GOVBtK1N84ZS6jWNi2hFWmTtU35V7720lakTerec/sXK6oMNvhQhSUr0iZuA2urbUKtbYv6yCc2pE3SNnWEeuk6NYZWpA26DSwRUh+ZlzZMT9t9+GoblJD6yLd8pQ0nbY5QbUMSblEfmZc2XKUtCgxQIqxTV76K/wsjG8Cj4LaBecLmFXXlxEJjTNqQhy4Ewk3iwr0EoaFKWxRc955AeEtcmJc2UNfeOCuwTVKB8JK48A6vpUhpQx664AnrG8SFd1kthUobsntPIFRKG6Zrbxxc955ASHkmX0uEbQCPgtM2nnCe0hYuaRZmqVLaAixhz8Ldok595PcsoQvVUmD3nkBIXZfdAAZLG/DQheCl1HV5LUV17Y0jdO/pjpdXm1zeUdfllQbVtTcOvw3srqrS3mTy8QNxWWvSJmmbv9jQRHdZQdouwIR8957/WVUx1dVLD3hpwxy1mITXNuU2sI5w25a0Sdqm3AbWEVqTNuA2sI7wLU+I6tobR9gGXjFI+MFSpS0KqntPR8hLG7bSFoW/H+q2gXWEfNcecgN4FNQ2sI6Q79pDS5ukbR1zhD2+log5HxuPoG2qbWAVYctWLTEK373nqbaBVYSCtKGOWkwiaJuqe09FeMArDVracN17KkKL0obr3lMRWpQ2nLapCC1Km3joQtW9pyLkpQ1caYvCn5XVaZuKkO/aQ52PjYe/H+41lrJHRfiRlTbMQ02S4Q9dtK/XsqfFhbomX2lDdu2Nw28Du74i7jqdLeqa6ywhdgN4FNA2MFMvJWuJVo5aTMJrG4TwPXFJQdqo3dS8AT17jyOkqqWWuvbGAZ2VZQjrb4lLWurae7icWcJnxCWtHLWYBLQNzBFSJm2pa28c0DYwQ0j2JVo4HxuP1L1HbTIpCSmT5qXNNyBt0iOTO+10OEHgCKlB+cgS4ittUfhqW5vYY7pmJjX3PaQGxa60CWdl3WG62rZ0zSy9DCHVtdfja4no7dFRBG1LlzGWFpl/ShPS0maz0haF796jqm01ZlIzhJS0WTpqMQmvbcGnNGGDmdQMoVLalo0Q8t171DZwg5nUNGERpE3cBv5GzFJmUjOElLRZOmoxibAN/CVdqald0JOaISyAtEna5i0ThOcaQlrabHXtjSPUE78ShEf0pGYIKWkTuvaMSJvwyGT3NE249EZFSA0Kf9QC84DkdPhSVIWQmjV6yGlCsg7FS5sZLZXEdEiMISOmzBhS1+MrbfgN4FH4bWCXqHrX6L+2SELyMIlQaUOej42H17buEnHLV9wPldLmmpE26dl7PqFttT0/8NKUacJmfX2dUhrLlbYoOm1bbCx++7rqB1OQ1RTd5gZ9/7Z21GISnbaFi81SrXb95XTBjw9lNYF3dbnL3tqsS5tW2+4pa43a5+VK8DBhqw90zdsTUU0EacNvAI+i07YEZTRhg7sJW72jq3NTMxbr0parey+csI1PR9GE7dS3ri4PslgXL21mKm2OuA1MaBsxlLVwwj4yNWPhpQ191GISfpOU0DaGMvvV+KMWZiptUfhHnGTv3su+y81rqYnt0VFYbXM7mZuGMhMKlTZT0iZ272XubctMaPGoxSSCtuEJrZ2PjQdx6CIzoSBt+K69cYTuPVLbchFa7dobB9G9l5lwDtImatt5g/gTMRfhW17a8F174/DVNne48mapUcsAmZHw4G3idmh+A/g+/Daw6wX+zflarfbYUGYg3Hn2fms9MUeThMfmAB15K9/1/GH/aLEhUj5C2Nv+cLU+9ZDyKaWB/EIul0dPA7tu4LcvPgsTViDs7V5ebaXpUtJmTksz/nJuOJQLp18+MROWI9zZeF8nBo9SGvxRi0ky/9JFOJTDr98WiaGkCMOp+QNPlyI0J2267r1w7fEqy2vhX4VLIuHhxrvpXweQCY107Y2j7d4LJ2ynf3QdX3sShK2T26Y8ePeJv6lBaZupey9ae1Yv3jxM2AfCXnjLy0SXIjQnbTN370Vrz96XT3dDOSIMb3nCuiITGpS2XN17rtftRGvP3U0h29TkCM1JW94fKLtbewabj68rqdipJUbhH5mcmbKjxpsmNHHUYpK8gDP+ko7Rh5okk/8RJ/kJTW2PjpJJ2wwTmunaGyf/oYuZCC107Y3DPzLZJGFyocGfj40n/6ELLWEz+UPcxrr2xsn/7D0VYbOTfgNjG8Cj5D90kZkwNXj3MSptiEcmZyNk6O4ITUob4tDF44TNqvgGJittDuKRyTIhNzXjhEYBAY9MFgipdSUdk5W2KHkB2dN5jw/eKEYrbVFyPzKZIsxKd0doVtocp9IlOrnyED6yrkzzecfmNoDvczhopzq5ZiXMPDXv6fygPTDT4T2V3nbfnZnygbCuoYsKsAtnfIeYgezsVwJ/lglbnWnwvL19s7dBMr3ds6F+KKuqdSUqRgarA7OiJqZ1sufNNJTZ8ILuQn97DoM3lcNB1JSHpoymZmXfrIMq0trud7p5VthpvKA7FDpP55TWfsVFTNi7zbnM7X2W0ztYGeYaynBdOV61c8ubPa2TqbZnzeB1breLNjXpjLxHQxnS+e3zwqwrWRLeLKtZJ2y0rtj1FVR29m8evVmGg+fuFXVdyZSDlVV2KMN1pWtJpc2GXntCle70v5N1JUt2Bu3uZO2J1pWb4vgKKmNRj/b1V+ao0mYTTtiqbZX+P/T/uBp/VVtyAAAAAElFTkSuQmCC"
          />
        </span>

        <h2 className="skill_title">Framework</h2>
        <span className="skill_container">
          <img
            className="skill_image"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Android_vector.jpg"
          />
          <img
            className="skill_image"
            src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp"
          />
          <img
            className="skill_image"
            src="https://vectorseek.com/wp-content/uploads/2023/04/Vue-js-Logo-Vector.jpg"
          />
        </span>

        <h2 className="skill_title">Technology</h2>
        <span className="skill_container">
          <img
            className="skill_image"
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
          />
          <img
            className="skill_image"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          />
        </span>
      </div>
    </div>
  );
};

export default Skill;
