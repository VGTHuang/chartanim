<template>
    <modal name="sheet-syntax-modal"
    :scrollable="true"
    height="auto"
    width="650"
    >
        <div class="custom-modal panel-basic">
            <div class="msg-ctn">
                <div class="lt-basic msg-row">Allowed syntax for your data set</div>
            </div>
            <div class="msg-ctn">
                <div class="msg-basic msg-row">
                    <ol>
                        <li>One single row of heading must be present.</li>
                        <li>In a timestamped table, the first column contains timestamps for each row of record. Formats of the timestamps should conform to these following types:
                            <ul>
                                <li>YYYY (eg 1997)</li>
                                <li>YYYY-MM (eg 1997-07)</li>
                                <li>YYYY-MM-DD (eg 1997-07-16)</li>
                            </ul>
                            Rows do not have to be in chronological order; they will be automatically sorted.
                        </li>
                        <li>In a non-timestamped table, all rows of records are treated as equidistant in terms of time.</li>
                        <li>Data records must be pure numbers; data with units or other non-numeric values are ignored. All empty records will be filled with 0.</li>
                    </ol>
                </div>
            </div>
            <div class="msg-ctn">
                <div class="lt-basic msg-row">Example for timestamped table</div>
                <div class="msg-row msg-row-col-center">
                    <div class="mt-basic msg-row">U.S. imports of total dairy products (million dollar)</div>
                    <table class="msg-row">
                        <thead>
                            <tr><th>year</th><th>ITALY</th><th>NEW ZEALAND</th><th>FRANCE</th><th>IRELAND</th><th>CANADA</th><th>SPAIN</th><th>NETHERLANDS</th><th>MEXICO</th><th>REST OF WORLD</th></tr>
                            </thead>
                        <tbody>
                            <tr><td>1999</td><td>146.0</td><td>165.2</td><td>74.9</td><td>42.6</td><td>71.3</td><td>5.1</td><td>44.8</td><td>4.6</td><td>375.8</td></tr>
                            <tr><td>2000</td><td>145.3</td><td>156.8</td><td>71.9</td><td>34.9</td><td>52.6</td><td>8.4</td><td>55.8</td><td>7.7</td><td>388.9</td></tr>
                            <tr><td>2001</td><td>162.5</td><td>214.4</td><td>72.9</td><td>23.1</td><td>80.2</td><td>10.5</td><td>47.9</td><td>7.5</td><td>376.7</td></tr>
                            <tr><td>2002</td><td>165.3</td><td>188.8</td><td>91.8</td><td>28.7</td><td>66.5</td><td>13.4</td><td>49.2</td><td>10.1</td><td>395.0</td></tr>
                            <tr><td>2003</td><td>210.6</td><td>204.9</td><td>109.9</td><td>28.6</td><td>57.0</td><td>18.2</td><td>56.0</td><td>23.1</td><td>402.1</td></tr>
                            <tr><td>2004</td><td>223.7</td><td>242.9</td><td>134.5</td><td>41.3</td><td>90.1</td><td>22.3</td><td>57.6</td><td>31.1</td><td>448.7</td></tr>
                            <tr><td>2005</td><td>221.0</td><td>251.6</td><td>126.2</td><td>44.5</td><td>86.2</td><td>26.9</td><td>61.6</td><td>44.8</td><td>525.7</td></tr>
                            <tr><td>2006</td><td>242.0</td><td>277.8</td><td>136.2</td><td>40.6</td><td>75.1</td><td>32.7</td><td>66.0</td><td>51.7</td><td>483.7</td></tr>
                            <tr><td>2007</td><td>302.0</td><td>256.2</td><td>152.2</td><td>43.9</td><td>86.5</td><td>38.1</td><td>67.0</td><td>51.4</td><td>503.6</td></tr>
                            <tr><td>2008</td><td>326.8</td><td>313.0</td><td>157.5</td><td>46.5</td><td>62.6</td><td>43.6</td><td>74.8</td><td>63.8</td><td>507.0</td></tr>
                            <tr><td>2009</td><td>267.4</td><td>261.0</td><td>143.5</td><td>39.2</td><td>57.5</td><td>41.4</td><td>58.9</td><td>56.7</td><td>427.7</td></tr>
                            <tr><td>2010</td><td>277.4</td><td>238.8</td><td>144.9</td><td>41.1</td><td>76.8</td><td>46.4</td><td>63.4</td><td>64.7</td><td>393.8</td></tr>
                            <tr><td>2011</td><td>311.8</td><td>269.9</td><td>186.1</td><td>42.6</td><td>70.3</td><td>57.7</td><td>80.2</td><td>69.3</td><td>414.3</td></tr>
                            <tr><td>2012</td><td>301.6</td><td>343.9</td><td>169.8</td><td>54.6</td><td>82.3</td><td>60.3</td><td>77.6</td><td>76.5</td><td>437.5</td></tr>
                            <tr><td>2013</td><td>310.3</td><td>256.1</td><td>199.8</td><td>57.2</td><td>95.8</td><td>79.5</td><td>82.9</td><td>78.9</td><td>488.6</td></tr>
                            <tr><td>2014</td><td>308.3</td><td>344.5</td><td>213.5</td><td>75.1</td><td>98.5</td><td>96.5</td><td>107.1</td><td>82.8</td><td>518.0</td></tr>
                            <tr><td>2015</td><td>304.9</td><td>371.1</td><td>188.0</td><td>90.7</td><td>79.5</td><td>100.2</td><td>98.2</td><td>86.5</td><td>574.5</td></tr>
                            <tr><td>2016</td><td>307.9</td><td>341.2</td><td>187.9</td><td>110.8</td><td>80.2</td><td>93.3</td><td>98.9</td><td>97.7</td><td>558.0</td></tr>
                            <tr><td>2017</td><td>304.4</td><td>286.7</td><td>183.6</td><td>146.0</td><td>110.9</td><td>97.5</td><td>97.1</td><td>88.4</td><td>512.5</td></tr>
                        </tbody>
                    </table>
                    <div class="msg-basic msg-s msg-row">Source: https://www.ers.usda.gov/data-products/us-food-imports.aspx</div>
                </div>
            </div>
            <div class="msg-ctn">
                <div class="lt-basic msg-row">Example for non-timestamped table</div>
                <div class="msg-row msg-row-col-center">
                    <div class="mt-basic msg-row">U.S. imports of total dairy products (million dollar)</div>
                    <table class="msg-row">
                        <thead>
                            <tr><th>ITALY</th><th>NEW ZEALAND</th><th>FRANCE</th><th>IRELAND</th><th>CANADA</th><th>SPAIN</th><th>NETHERLANDS</th><th>MEXICO</th><th>REST OF WORLD</th></tr>
                            </thead>
                        <tbody>
                            <tr><td>146.0</td><td>165.2</td><td>74.9</td><td>42.6</td><td>71.3</td><td>5.1</td><td>44.8</td><td>4.6</td><td>375.8</td></tr>
                            <tr><td>145.3</td><td>156.8</td><td>71.9</td><td>34.9</td><td>52.6</td><td>8.4</td><td>55.8</td><td>7.7</td><td>388.9</td></tr>
                            <tr><td>162.5</td><td>214.4</td><td>72.9</td><td>23.1</td><td>80.2</td><td>10.5</td><td>47.9</td><td>7.5</td><td>376.7</td></tr>
                            <tr><td>165.3</td><td>188.8</td><td>91.8</td><td>28.7</td><td>66.5</td><td>13.4</td><td>49.2</td><td>10.1</td><td>395.0</td></tr>
                            <tr><td>210.6</td><td>204.9</td><td>109.9</td><td>28.6</td><td>57.0</td><td>18.2</td><td>56.0</td><td>23.1</td><td>402.1</td></tr>
                            <tr><td>223.7</td><td>242.9</td><td>134.5</td><td>41.3</td><td>90.1</td><td>22.3</td><td>57.6</td><td>31.1</td><td>448.7</td></tr>
                            <tr><td>221.0</td><td>251.6</td><td>126.2</td><td>44.5</td><td>86.2</td><td>26.9</td><td>61.6</td><td>44.8</td><td>525.7</td></tr>
                            <tr><td>242.0</td><td>277.8</td><td>136.2</td><td>40.6</td><td>75.1</td><td>32.7</td><td>66.0</td><td>51.7</td><td>483.7</td></tr>
                            <tr><td>302.0</td><td>256.2</td><td>152.2</td><td>43.9</td><td>86.5</td><td>38.1</td><td>67.0</td><td>51.4</td><td>503.6</td></tr>
                            <tr><td>326.8</td><td>313.0</td><td>157.5</td><td>46.5</td><td>62.6</td><td>43.6</td><td>74.8</td><td>63.8</td><td>507.0</td></tr>
                            <tr><td>267.4</td><td>261.0</td><td>143.5</td><td>39.2</td><td>57.5</td><td>41.4</td><td>58.9</td><td>56.7</td><td>427.7</td></tr>
                            <tr><td>277.4</td><td>238.8</td><td>144.9</td><td>41.1</td><td>76.8</td><td>46.4</td><td>63.4</td><td>64.7</td><td>393.8</td></tr>
                            <tr><td>311.8</td><td>269.9</td><td>186.1</td><td>42.6</td><td>70.3</td><td>57.7</td><td>80.2</td><td>69.3</td><td>414.3</td></tr>
                            <tr><td>301.6</td><td>343.9</td><td>169.8</td><td>54.6</td><td>82.3</td><td>60.3</td><td>77.6</td><td>76.5</td><td>437.5</td></tr>
                            <tr><td>310.3</td><td>256.1</td><td>199.8</td><td>57.2</td><td>95.8</td><td>79.5</td><td>82.9</td><td>78.9</td><td>488.6</td></tr>
                            <tr><td>308.3</td><td>344.5</td><td>213.5</td><td>75.1</td><td>98.5</td><td>96.5</td><td>107.1</td><td>82.8</td><td>518.0</td></tr>
                            <tr><td>304.9</td><td>371.1</td><td>188.0</td><td>90.7</td><td>79.5</td><td>100.2</td><td>98.2</td><td>86.5</td><td>574.5</td></tr>
                            <tr><td>307.9</td><td>341.2</td><td>187.9</td><td>110.8</td><td>80.2</td><td>93.3</td><td>98.9</td><td>97.7</td><td>558.0</td></tr>
                            <tr><td>304.4</td><td>286.7</td><td>183.6</td><td>146.0</td><td>110.9</td><td>97.5</td><td>97.1</td><td>88.4</td><td>512.5</td></tr>
                        </tbody>
                    </table>
                    <div class="msg-basic msg-s msg-row">Source: https://www.ers.usda.gov/data-products/us-food-imports.aspx</div>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
    name: "SheetSyntaxModal"
}
</script>