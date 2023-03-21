import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

export default function Cart() {
  return (
    <>
      <div className="w-[50rem] flex  justify-center  mt-24 border rounded-lg m-auto">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Description</Th>
                <Th>Quantity</Th>
                <Th>Remove</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <div className="flex jutify-center items-center">
                    <img
                      src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/512ZY9SCkxL._SL1191_.jpg"
                      className="w-44"
                    />
                    <div>
                      <h2 className="font-bold">Header of exapmle product</h2>

                      <p className="text-md text-zinc-600">Product: Firma</p>
                    </div>
                  </div>
                </Td>
                <Td>
                  <div className="flex">
                    <AiFillPlusSquare size={50} />
                    <div className="h-10 w-10 border mt-[5px] justify-center items-center flex ">
                      1
                    </div>
                    <AiFillMinusSquare size={50} />
                  </div>
                </Td>
                <Td>
                  <div className="border-2 flex justify-center items-center p-2">
                    X
                  </div>
                </Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>
                  <div className="flex jutify-center items-center">
                    <img
                      src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/512ZY9SCkxL._SL1191_.jpg"
                      className="w-44"
                    />
                    <div>
                      <h2 className="font-bold">Header of exapmle product</h2>

                      <p className="text-md text-zinc-600">Product: Firma</p>
                    </div>
                  </div>
                </Td>
                <Td>
                  <div className="flex">
                    <AiFillPlusSquare size={50} />
                    <div className="h-10 w-10 border mt-[5px] justify-center items-center flex ">
                      1
                    </div>
                    <AiFillMinusSquare size={50} />
                  </div>
                </Td>
                <Td>
                  <div className="border-2 flex justify-center items-center p-2">
                    X
                  </div>
                </Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>
                  <div className="flex jutify-center items-center">
                    <img
                      src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/512ZY9SCkxL._SL1191_.jpg"
                      className="w-44 min-w-[10em]"
                    />
                    <div>
                      <h2 className="font-bold">Header of exapmle product</h2>

                      <p className="text-md text-zinc-600">Product: Firma</p>
                    </div>
                  </div>
                </Td>
                <Td>
                  <div className="flex">
                    <AiFillPlusSquare size={50} />
                    <div className="h-10 w-10 border mt-[5px] justify-center items-center flex ">
                      1
                    </div>
                    <AiFillMinusSquare size={50} />
                  </div>
                </Td>
                <Td>
                  <div className="border-2 flex justify-center items-center p-2">
                    X
                  </div>
                </Td>
                <Td isNumeric>25.4</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Td>Price:</Td>
            </Tfoot>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
